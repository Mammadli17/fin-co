// app/api/chat/route.js (App Router) veya pages/api/chat.js (Pages Router)
// Bu kod, sunucu tarafında (Server-side) çalışır ve API anahtarınızı güvende tutar.

import { NextResponse } from 'next/server';
import axios from 'axios';

// GİZLİ ANAHTARLARINIZI .env DOSYASINDA SAKLAYIN!
// Next.js, sunucu tarafında process.env.YOUR_VAR_NAME ile bunlara erişebilir.
const CHATBASE_API_KEY = process.env.CHATBASE_API_KEY || '<Your-Secret-Key>'; 
const CHATBOT_ID = process.env.CHATBOT_ID || '<Your Chatbot ID>';
const CHATBASE_API_URL = 'https://www.chatbase.co/api/v1/chat';

export async function POST(request) {
  try {
    const { message } = await request.json(); // İstemciden gelen mesaj

    const authorizationHeader = `Bearer ${CHATBASE_API_KEY}`;
    
    // Chatbase API'sine istek gönderme
    const chatbaseResponse = await axios.post(
      CHATBASE_API_URL,
      {
        messages: [{ content: message, role: 'user' }], // İstemci mesajını iletiyoruz
        chatId: CHATBOT_ID,
        stream: true, // Akışı etkinleştir
        temperature: 0,
      },
      {
        headers: {
          Authorization: authorizationHeader,
          'Content-Type': 'application/json',
        },
        responseType: 'stream', // Yanıtı akış olarak al
      }
    );

    // Chatbase'ten gelen akışı istemciye (React) iletmek için 
    // yerel bir ReadableStream kullanıyoruz
    const stream = new ReadableStream({
      start(controller) {
        chatbaseResponse.data.on('data', (chunk) => {
          controller.enqueue(chunk);
        });

        chatbaseResponse.data.on('end', () => {
          controller.close();
        });

        chatbaseResponse.data.on('error', (err) => {
          controller.error(err);
        });
      },
    });

    // İstemciye (tarayıcıya) akış yanıtını döndürme
    return new NextResponse(stream, {
        headers: {
            'Content-Type': 'text/plain', // Akış verisi için uygun başlık
        },
    });

  } catch (error) {
    console.error('API Route Error:', error.message);
    return NextResponse.json({ error: 'Failed to stream from Chatbase API' }, { status: 500 });
  }
}

// Next.js API Route'u için 'axios' paketini kurmanız gerekebilir:
// npm install axios