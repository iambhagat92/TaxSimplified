import Link from 'next/link';

export default function Header() {
    return (
        <header style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '15px 0', position: 'sticky', top: 0, zIndex: 1000 }}>
            <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    Tax Basics
                </Link>
                <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
                    <Link href="/tax-fundamentals" style={{ color: 'rgba(255,255,255,0.9)' }}>Fundamentals</Link>
                    <Link href="/income-types" style={{ color: 'rgba(255,255,255,0.9)' }}>Income</Link>
                    <Link href="/deductions" style={{ color: 'rgba(255,255,255,0.9)' }}>Deductions</Link>
                    <Link href="/tax-filing" style={{ color: 'rgba(255,255,255,0.9)' }}>Filing</Link>
                    <Link href="/tools" style={{ color: 'rgba(255,255,255,0.9)' }}>Tools</Link>
                </div>
            </nav>
        </header>
    );
}
