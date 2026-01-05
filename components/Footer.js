import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: '#bdc3c7', textAlign: 'center', padding: '40px 0', marginTop: '50px' }}>
            <div className="container">
                <h3>Tax Basics for Beginners</h3>
                <p>Designed to help you learn, not to give legal advice.</p>
                <br />
                <p style={{ fontSize: '0.9rem' }}>
                    <Link href="/about" style={{ color: '#ecf0f1', margin: '0 10px' }}>About Us</Link> |
                    <Link href="/privacy-policy" style={{ color: '#ecf0f1', margin: '0 10px' }}>Privacy Policy</Link> |
                    <Link href="/contact" style={{ color: '#ecf0f1', margin: '0 10px' }}>Contact</Link>
                </p>
                <p style={{ fontSize: '0.8rem', marginTop: '20px', color: '#7f8c8d' }}>
                    <strong>Disclaimer:</strong> This website is for educational purposes only. Tax laws change frequently.
                    Please consult a Chartered Accountant (CA) or tax professional for your specific financial filings.
                </p>
                <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>&copy; 2026 Tax Basics Learning.</p>
            </div>
        </footer>
    );
}
