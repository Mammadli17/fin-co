"use client"; // Next.js App Router için gerekli

import React, { useState } from 'react';
import './style.css'; 
import AIAssistant from './ai-assistant';

// =========================================================
// A. Tüm Sayfa Bileşenleri (Components)
// =========================================================

// Yeni Arayüz Tanımlaması: Login bileşeninin beklediği props'ları belirtir
interface LoginProps {
    onLogin: () => void; 
}

// --- A.1. Giriş Sayfası Bileşeni ---
const Login = ({ onLogin }: LoginProps) => { // 🛠️ DÜZELTME BURADA
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        setError('');
        setLoading(true);
        const VALID_EMAIL = 'isamammadli17@gmail.com';
        const VALID_PASSWORD = 'Salam123!';

        setTimeout(() => {
            setLoading(false);
            if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                onLogin();
            } else {
                setError('Hatalı e-posta veya şifre. Lütfen demo bilgilerini kullanın.');
            }
        }, 2000); 
    };

    return (
        <div id="login-page">
            <div className="login-card">
                <div className="login-logo"><i className="fas fa-link"></i> FinLink Pro</div>
                <h3>Welcome Back</h3>
                <p>Enter your credentials to access your dashboard</p>
                
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <div className="input-container">
                        <i className="fas fa-envelope input-icon"></i>
                        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div className="input-container">
                        <i className="fas fa-lock input-icon"></i>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    
                    {error && <p style={{ color: 'var(--accent-red)', marginBottom: '15px', fontSize: '14px', textAlign: 'left' }}>{error}</p>}

                    <button type="submit" className="btn-login" disabled={loading}>
                        {loading ? (<><i className="fas fa-spinner fa-spin"></i> Yükleniyor...</>) : (<><i className="fas fa-sign-in-alt"></i> Giriş Yap</>)}
                    </button>
                </form>

                <p className="mt-3">Don't have an account? <a href="#">Sign up</a></p>
                <p className="demo-text" style={{ marginTop: '5px' }}>
                    **Demo Kimlik Bilgileri:** Email: `isamammadli17@gmail.com` | Şifre: `Salam123!`
                </p>
            </div>
        </div>
    );
};

// Yeni Arayüz Tanımlaması: Sidebar bileşeninin beklediği props'ları belirtir
interface SidebarProps {
    activePage: string;
    onPageChange: (pageId: string) => void; 
}

// --- A.2. Kenar Çubuğu Bileşeni ---
const Sidebar = ({ activePage, onPageChange }: SidebarProps) => {
    const navItems = [
        { id: 'overview', icon: 'fas fa-tachometer-alt', label: 'Overview' },
        { id: 'invoices', icon: 'fas fa-file-invoice', label: 'Invoices' },
        { id: 'ai-assistant', icon: 'fas fa-robot', label: 'AI Assistant' },
        { id: 'accountant-match', icon: 'fas fa-user-tie', label: 'Accountant Match' },
        { id: 'banking-risk', icon: 'fas fa-university', label: 'Banking & Risk' },
        { id: 'supply-chain', icon: 'fas fa-truck-loading', label: 'Supply Chain' },
        { id: 'settings', icon: 'fas fa-cog', label: 'Settings' },
    ];
    
    return (
        <aside className="sidebar">
            <div className="logo"><i className="fas fa-link"></i> FinLink Pro</div>
            <div style={{ padding: '0 20px 10px', fontSize: '13px', color: '#a0a0a0' }}>SME Dashboard</div>
            <nav>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id} className={activePage === item.id ? 'active' : ''}>
                            <a onClick={() => onPageChange(item.id)}><i className={item.icon}></i> {item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

// --- A.3. Genel Bakış Sayfası (Overview) ---
const Overview = () => (
    <>
        <header className="dashboard-header"><h2>Overview</h2><p>Your financial dashboard at a glance</p></header>
        <section className="metrics-grid">
            <div className="card metric-card income"><div className="metric-card-content"><div><p>Monthly Income</p><h3>$67,000</h3><span className="change">+12% from last month</span></div><i className="fas fa-dollar-sign fa-2x" style={{ color: 'var(--accent-green)' }}></i></div></div>
            <div className="card metric-card expenses"><div className="metric-card-content"><div><p>Monthly Expenses</p><h3>$45,000</h3><span className="change" style={{ color: 'var(--text-muted)' }}>Operating costs</span></div><i className="fas fa-minus-circle fa-2x" style={{ color: 'var(--accent-red)' }}></i></div></div>
            <div className="card metric-card cash-flow"><div className="metric-card-content"><div><p>Net Cash Flow</p><h3 style={{ color: 'var(--accent-green)' }}>$22,000</h3><span className="change" style={{ color: 'var(--accent-green)' }}>Healthy margin</span></div><i className="fas fa-piggy-bank fa-2x" style={{ color: 'var(--accent-blue)' }}></i></div></div>
            <div className="card metric-card pending-invoices"><div className="metric-card-content"><div><p>Pending Invoices</p><h3>$8,300</h3><span className="change" style={{ color: 'var(--text-muted)' }}>1 invoice outstanding</span></div><i className="fas fa-hourglass-half fa-2x" style={{ color: '#f39c12' }}></i></div></div>
        </section>
        <section className="chart-grid">
            <div className="card cash-flow-chart"><h4>Cash Flow Trend</h4><div className="chart-placeholder"><p></p></div></div>
            <div className="card monthly-comparison"><h4>Monthly Comparison</h4><div className="chart-placeholder"><p></p></div></div>
        </section>
        <section className="bottom-grid">
            <div className="card ai-alerts">
                <h4><i className="fas fa-robot"></i> AI Financial Alerts</h4>
                <div className="alert-card"><p style={{ color: 'var(--accent-green)' }}>Cash flow is healthy</p><p style={{ fontSize: '13px', color: '#4CAF50' }}>Your income-to-expense ratio is optimal at 1.49</p></div>
            </div>
            <div className="card recent-invoices">
                <h4>Recent Invoices</h4>
                <div className="invoice-item"><div className="details"><span className="invoice-id">INV-001</span><span>Acme Corp</span></div><span className="amount">$12,500</span></div>
                <div className="invoice-item"><div className="details"><span className="invoice-id">INV-002</span><span>Global Ltd</span></div><span className="amount">$4,800</span></div>
                <div className="invoice-item" style={{ borderBottom: 'none' }}><div className="details"><span className="invoice-id">INV-003</span><span>TechStart Inc</span></div><span className="amount">$8,300</span></div>
            </div>
        </section>
    </>
);

// --- A.4. Analizler Sayfası (Analytics) --- (Buraya bir bileşen eklemediniz, gerekirse eklenebilir)

// --- A.5. Fatura Yönetimi Sayfası (Invoices) ---
const Invoices = () => (
    <>
        <header className="dashboard-header"><h2>Invoice Management</h2><p>Upload, track, and analyze your invoices</p></header>
        
        <section className="chart-grid">
            <div className="card invoice-upload-box">
                <h4>Upload Invoice</h4>
                <div className="upload-area">
                    <i className="fas fa-cloud-upload-alt fa-3x"></i>
                    <p>Upload PDF or Image</p>
                    <small>AI-powered OCR will extract invoice data automatically</small>
                    <input type="file" id="file-upload" style={{display: 'none'}} />
                    <label htmlFor="file-upload" className="btn-file-choose">Choose File</label>
                    <span>No file chosen</span>
                </div>
            </div>
            
            <div className="card fraud-detection-box">
                <h4>Fraud Detection</h4>
                <div className="alert-card clear">
                    <i className="fas fa-check-circle"></i> **All Clear**
                    <p>No fraudulent patterns detected in recent invoices</p>
                </div>
                <div className="alert-card medium-risk">
                    <i className="fas fa-exclamation-triangle"></i> **1 Medium Risk Alert**
                    <p>INV-004: Unusually high amount from new client. Review recommended.</p>
                </div>
                <p style={{marginTop: '15px', fontWeight: 'bold'}}>AI monitors for:</p>
                <ul className="risk-factors">
                    <li>Duplicate invoice numbers</li>
                    <li>Unusual payment patterns</li>
                    <li>Suspicious vendor details</li>
                    <li>Amount anomalies</li>
                </ul>
            </div>
        </section>

        <section className="card invoice-history-section">
            <h4>Invoice History</h4>
            <table className="invoice-table">
                <thead>
                    <tr><th>Invoice ID</th><th>Client</th><th>Amount</th><th>Date</th><th>Status</th><th>Fraud Risk</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>INV-001</td><td>Acme Corp</td><td>$12,500</td><td>2024-01-15</td><td><span className="status-tag paid">Paid</span></td><td><span className="risk-tag low">LOW RISK</span></td><td><button className="action-button">View</button></td></tr>
                    <tr><td>INV-002</td><td>TechStart Inc</td><td>$8,300</td><td>2024-01-18</td><td><span className="status-tag pending">Pending</span></td><td><span className="risk-tag low">LOW RISK</span></td><td><button className="action-button">View</button></td></tr>
                    <tr><td>INV-003</td><td>Global Ltd</td><td>$15,750</td><td>2024-01-20</td><td><span className="status-tag paid">Paid</span></td><td><span className="risk-tag low">LOW RISK</span></td><td><button className="action-button">View</button></td></tr>
                    <tr><td>INV-004</td><td>New Client</td><td>$21,000</td><td>2024-02-01</td><td><span className="status-tag pending">Pending</span></td><td><span className="risk-tag medium">MEDIUM RISK</span></td><td><button className="action-button">Review</button></td></tr>
                </tbody>
            </table>
        </section>
    </>
);

// --- A.6. AI Asistanı Sayfası (AI Assistant) --- (AIAssistant bileşeni './ai-assistant'ten import edildi)

// --- A.7. Muhasebeci Eşleştirme Sayfası (Accountant Match) ---
const AccountantMatch = () => (
    <>
        <header className="dashboard-header"><h2>Find Your Perfect Accountant</h2><p>Connect with certified professionals who understand your business</p></header>
        <h4 style={{marginBottom: '20px'}}>Recommended for You</h4>
        
        <div className="accountant-list">
            <div className="card accountant-card">
                <div className="accountant-header">
                    <div className="initials">SJ</div>
                    <div className="details">
                        <h4>Sarah Johnson <i className="fas fa-star"></i> 4.9 (127 reviews)</h4>
                        <p><i className="fas fa-map-marker-alt"></i> New York, NY</p>
                        <div className="tags">
                            <span className="tag green">Tax Planning</span>
                            <span className="tag blue">SME Advisory</span>
                            <span className="tag orange">Financial Reporting</span>
                        </div>
                        <small>8 years experience | CPA, CMA</small>
                    </div>
                    <div className="price">$85 <span>per hour</span></div>
                </div>
                <div className="accountant-actions">
                    <button className="btn-request">Request Connection</button>
                    <button className="btn-view">View Profile</button>
                </div>
            </div>
            
            <div className="card accountant-card">
                <div className="accountant-header">
                    <div className="initials mc">MC</div>
                    <div className="details">
                        <h4>Michael Chen <i className="fas fa-star"></i> 4.8 (98 reviews)</h4>
                        <p><i className="fas fa-map-marker-alt"></i> San Francisco, CA</p>
                        <div className="tags">
                            <span className="tag blue">Startup CFO Services</span>
                            <span className="tag green">Fundraising</span>
                            <span className="tag orange">Tech Accounting</span>
                        </div>
                        <small>10 years experience | CPA</small>
                    </div>
                    <div className="price">$95 <span>per hour</span></div>
                </div>
                <div className="accountant-actions">
                    <button className="btn-request">Request Connection</button>
                    <button className="btn-view">View Profile</button>
                </div>
            </div>
            
            <div className="card accountant-card">
                <div className="accountant-header">
                    <div className="initials er">ER</div>
                    <div className="details">
                        <h4>Emily Rodriguez <i className="fas fa-star"></i> 4.7 (84 reviews)</h4>
                        <p><i className="fas fa-map-marker-alt"></i> Austin, TX</p>
                        <div className="tags">
                            <span className="tag orange">Bookkeeping</span>
                            <span className="tag green">Payroll</span>
                            <span className="tag blue">Compliance</span>
                        </div>
                        <small>6 years experience | EA, QuickBooks ProAdvisor</small>
                    </div>
                    <div className="price">$65 <span>per hour</span></div>
                </div>
                <div className="accountant-actions">
                    <button className="btn-request">Request Connection</button>
                    <button className="btn-view">View Profile</button>
                </div>
            </div>
        </div>
    </>
);

// --- A.8. Bankacılık ve Risk Sayfası (Banking & Risk) ---
const BankingRisk = () => (
    <>
        <header className="dashboard-header"><h2>Banking & Risk Management</h2><p>Monitor accounts, credit score, and payment status</p></header>
        <section className="account-grid">
            <div className="card account-card"><span className="account-name">Business Checking <i className="fas fa-lock float-right" style={{ color: 'var(--text-muted)', fontSize: '14px' }}></i></span><span className="balance">$45,230</span><span className="status">Chase - Active</span></div>
            <div className="card account-card"><span className="account-name">Savings Account <i className="fas fa-lock float-right" style={{ color: 'var(--text-muted)', fontSize: '14px' }}></i></span><span className="balance">$28,500</span><span className="status">Bank of America - Active</span></div>
        </section>
        
        <section className="sme-risk-score card">
            <h4>SME Credit Risk Score</h4>
            <div className="score">742</div>
            <div className="out-of">Out of 850 <span className="excellent-tag">Excellent</span> <small>Top 15% of SMEs</small></div>
            <div className="score-details-grid">
                <div className="score-detail-item"><div className="value">98%</div><div className="label">Payment History</div></div>
                <div className="score-detail-item"><div className="value">32%</div><div className="label">Credit Utilization</div></div>
                <div className="score-detail-item"><div className="value">4.2 yrs</div><div className="label">Account Age</div></div>
            </div>
        </section>
        
        <section className="risk-bottom-grid">
            <div className="card payment-alerts">
                <h4>Payment Alerts</h4>
                <div className="alert-item overdue">
                    <div className="details"><strong>TechStart Inc</strong><br/><span style={{ color: 'var(--accent-red)' }}>$8,300 - 3 days overdue</span></div>
                    <button className="action-btn small-btn red">Remind</button>
                </div>
                <div className="alert-item due-soon">
                    <div className="details"><strong>Global Ltd</strong><br/><span style={{ color: 'var(--text-muted)' }}>$12,000 - Due in 2 days</span></div>
                    <button className="action-btn small-btn view">View</button>
                </div>
            </div>
            <div className="card bank-offers">
                <h4>Bank Offers</h4>
                <div className="offer-item">
                    <span className="pre-approved">Pre-approved</span>
                    <h4>Business Line of Credit</h4>
                    <p>Wells Fargo</p>
                    <span className="rate">6.5% APR</span> | Flexible
                    <button className="btn-learn">Learn More</button>
                </div>
                 <div className="offer-item">
                    <span className="pre-approved">Pre-approved</span>
                    <h4>Equipment Financing</h4>
                    <p>Chase</p>
                    <span className="rate">6.8% APR</span> | Up to $35,000
                </div>
            </div>
        </section>
    </>
);

// --- A.9. Tedarik Zinciri Sayfası (Supply Chain) ---
const SupplyChain = () => (
    <>
        <header className="dashboard-header"><h2>Supply Chain Financing</h2><p>Analyze supplier relationships and payment patterns</p></header>
        <section className="metrics-grid supply-metrics">
            <div className="card metric-card total-outstanding">
                <div className="metric-card-content">
                    <div>
                        <p>Total Outstanding</p>
                        <h3>$39,300</h3>
                        <span className="change" style={{ color: 'var(--text-muted)' }}>Across 4 suppliers</span>
                    </div>
                    <i className="fas fa-boxes fa-2x"></i>
                </div>
            </div>
            <div className="card metric-card avg-payment">
                <div className="metric-card-content">
                    <div>
                        <p>Avg Payment Days</p>
                        <h3 style={{ color: 'var(--accent-green)' }}>40 days</h3>
                        <span className="change" style={{ color: 'var(--accent-green)' }}>Within target range</span>
                    </div>
                    <i className="fas fa-clock fa-2x"></i>
                </div>
            </div>
            <div className="card metric-card high-risk">
                 <div className="metric-card-content">
                    <div>
                        <p>High Risk Suppliers</p>
                        <h3 style={{ color: 'var(--accent-red)' }}>1</h3>
                        <span className="change" style={{ color: 'var(--accent-red)' }}>Requires attention</span>
                    </div>
                    <i className="fas fa-exclamation-triangle fa-2x"></i>
                </div>
            </div>
        </section>

        <section className="card supplier-analysis-section">
            <h4>Supplier Analysis</h4>
            <table className="supplier-table">
                <thead>
                    <tr><th>Supplier</th><th>Avg Payment (days)</th><th>On-Time Rate</th><th>Risk Score</th><th>Outstanding</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>TechSupply Co</td><td>35</td><td>92%</td><td><span className="risk-tag low">LOW</span></td><td>$8,500</td><td><button className="action-button">Details</button></td></tr>
                    <tr><td>Office Depot</td><td>28</td><td>98%</td><td><span className="risk-tag low">LOW</span></td><td>$3,200</td><td><button className="action-button">Details</button></td></tr>
                    <tr><td>GlobalParts Ltd</td><td>45</td><td>75%</td><td><span className="risk-tag medium">MEDIUM</span></td><td>$12,000</td><td><button className="action-button">Details</button></td></tr>
                    <tr><td>Quick Logistics</td><td>52</td><td>68%</td><td><span className="risk-tag high">HIGH</span></td><td>$15,600</td><td><button className="action-button">Details</button></td></tr>
                </tbody>
            </table>
        </section>
        
        <section className="bottom-grid" style={{ gridTemplateColumns: '1fr' }}>
             <div className="card ai-recommendations">
                <h4><i className="fas fa-robot"></i> AI Financing Recommendations</h4>
                <div className="alert-card" style={{ borderLeftColor: 'var(--accent-blue)', backgroundColor: '#e3f2fd' }}>
                    <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Early Payment Discount Opportunity</p>
                    <p style={{ fontSize: '13px', color: '#2B76D4' }}>TechSupply Co offers 2% discount for payment within 15 days. Potential savings: $170/month</p>
                </div>
            </div>
        </section>
    </>
);

// --- A.10. Ayarlar Sayfası (Settings) ---
const Settings = () => (
    <>
        <header className="dashboard-header"><h2>Settings</h2><p>Manage your account and preferences</p></header>
        
        <div className="card settings-section">
            <h4>Company Profile</h4>
            <p>Update your business information</p>
            <div className="form-group">
                <label>Company Name</label>
                <input type="text" defaultValue="TechStart Inc" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="isamammadli17@gmail.com" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="text" defaultValue="+1 (555) 123-4567" />
            </div>
            <button className="btn-save-changes">Save Changes</button>
        </div>

        <div className="card settings-section">
            <h4>Connected Accounts</h4>
            <p>Manage your banking and payment integrations</p>
            <div className="connected-account-card">
                <div>
                    <strong>Chase Business Account</strong>
                    <p className="status-connected">Connected - Last sync: 2 hours ago</p>
                </div>
                <button className="btn-manage">Manage</button>
            </div>
            <div className="connected-account-card">
                <div>
                    <strong>Bank of America Savings</strong>
                    <p className="status-connected">Connected - Last sync: 5 hours ago</p>
                </div>
                <button className="btn-manage">Manage</button>
            </div>
            <button className="btn-add-account"><i className="fas fa-plus"></i> Add New Account</button>
        </div>
    </>
);


// =========================================================
// B. ANA APP BİLEŞENİ
// =========================================================

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('overview');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActivePage('overview');
  };

  const handlePageChange = (pageId: string) => { // Bu fonksiyonu da tiplendirelim
    setActivePage(pageId);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview />;
     
      case 'invoices':
        return <Invoices />;
      case 'ai-assistant':
        return <AIAssistant/>;
      case 'accountant-match':
        return <AccountantMatch />;
      case 'banking-risk':
        return <BankingRisk />;
      case 'supply-chain':
        return <SupplyChain />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;