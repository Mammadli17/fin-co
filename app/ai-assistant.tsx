// app/ai-assistant.tsx
import React, { useState, useRef, useEffect } from 'react';

// Mesaj tiplerini tanımlıyoruz
interface Message {
    role: 'user' | 'ai';
    content: string;
}

const AIAssistant = () => {
    // useRef tipini HTMLDivElement olarak belirtiyoruz
    const chatBoxRef = useRef<HTMLDivElement>(null); 

    const [messages, setMessages] = useState<Message[]>([
        // İlk mesajın da Message[] tipine uyduğunu belirtelim
        { role: 'ai', content: "Hello! I'm your AI financial assistant. I can help you with cash flow optimization, expense analysis, financial forecasting, and more. What would you like to know?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    // Mesajlar güncellendiğinde en alta kaydırma
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    // Olay parametresini tiplendiriyoruz
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setIsLoading(true);

        // 🛠️ DÜZELTME: Yeni mesajı Message tipinde tanımla
        const newMessage: Message = { role: 'user', content: userMessage }; 

        // 1. Kullanıcı mesajını ekle
        const newMessages = [...messages, newMessage];
        setMessages(newMessages); // Hata çözüldü
        
        // 2. AI yanıtı için bir yer tutucu ekle (Tipi uygun)
        setMessages((prev) => [...prev, { role: 'ai', content: '' } as Message]); 
        // Aslında yukarıdaki kullanım için de açıkça 'as Message' eklemek en güvenlisidir.

        try {
            const response = await fetch('/api/chat', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.body) {
                throw new Error("No response body received.");
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let aiResponseText = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                aiResponseText += chunk;
                
                setMessages((prev) => {
                    const lastMessageIndex = prev.length - 1;
                    if (prev[lastMessageIndex].role === 'ai') {
                        const updatedMessages = [...prev];
                        updatedMessages[lastMessageIndex].content = aiResponseText;
                        return updatedMessages;
                    }
                    return prev; 
                });
            }

        } catch (error) {
            console.error('Chat Stream Error:', error);
            setMessages((prev) => {
                const lastMessageIndex = prev.length - 1;
                prev[lastMessageIndex].content = 'Error: Failed to connect to AI assistant.';
                return [...prev];
            });
        } finally {
            setIsLoading(false);
        }
    };

    const MessageBubble = ({ message }: { message: Message }) => (
        <div className={message.role === 'user' ? 'user-message' : 'ai-message'}>
            {message.role === 'user' ? (
                <p><strong>You:</strong> {message.content}</p>
            ) : (
                <p><strong><i className="fas fa-robot"></i> AI:</strong> {message.content}</p>
            )}
        </div>
    );

    return (
        <>
            <header className="dashboard-header"><h2><i className="fas fa-robot"></i> AI Financial Assistant</h2><p>Get intelligent insights and recommendations</p></header>
            <section className="quick-actions">
                <div className="action-btn" onClick={() => setInput('Optimize cash flow')}><i className="fas fa-chart-pie"></i> Optimize cash flow</div>
                <div className="action-btn" onClick={() => setInput('Reduce expenses')}><i className="fas fa-money-bill-wave"></i> Reduce expenses</div>
                <div className="action-btn" onClick={() => setInput('Financial health check')}><i className="fas fa-heartbeat"></i> Financial health check</div>
            </section>
            
            <section className="card chat-container">
                <div className="chat-box" ref={chatBoxRef}>
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} message={msg} />
                    ))}
                    {isLoading && (
                        <div className="ai-message loading">
                            <i className="fas fa-spinner fa-spin"></i> AI is typing...
                        </div>
                    )}
                </div>
                <form className="chat-input-area" onSubmit={handleSendMessage}>
                    <input 
                        type="text" 
                        placeholder="Ask about your finances..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
                    </button>
                </form>
            </section>
        </>
    );
};
export default AIAssistant;