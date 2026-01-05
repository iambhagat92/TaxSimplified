import Link from 'next/link';
import { taxContent } from '@/lib/content';

export default function Home() {
    return (
        <div className="container">
            {/* Hero Section */}
            <section style={{ padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
                <h1>Tax Basics for Beginners – Simple Guide to Understand Income Tax</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--secondary)' }}>
                    Welcome! If you are a student, a first-time employee, or just confused about taxes, you are in the right place. We explain money matters in simple, human language—no jargon, no confusion.
                </p>
            </section>

            {/* Table of Contents / Hub Links */}
            <section className="mt-4">
                <h2>📖 Learning Hub</h2>
                <div className="card-grid">
                    {Object.entries(taxContent).map(([key, cluster]) => (
                        <Link href={`/${key}`} key={key} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 style={{ color: 'var(--link)' }}>{cluster.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>{cluster.description}</p>
                            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                                {cluster.articles.length} Articles →
                            </span>
                        </Link>
                    ))}
                    <Link href="/tools" className="card" style={{ textDecoration: 'none', color: 'inherit', border: '1px solid var(--accent)' }}>
                        <h3 style={{ color: 'var(--accent)' }}>🧮 Tax Tools</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Free Calculators & Estimators</p>
                        <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Try Now →</span>
                    </Link>
                </div>
            </section>

            <section className="mt-4">
                <h2>Why Learn Here?</h2>
                <ul>
                    <li><strong>Simple English:</strong> No complex legal terms.</li>
                    <li><strong>To The Point:</strong> Short articles you can read in 2 minutes.</li>
                    <li><strong>Topic Clusters:</strong> Learn step-by-step from zero to hero.</li>
                </ul>
            </section>
        </div>
    );
}
