import Link from 'next/link';
import { notFound } from 'next/navigation';
import { taxContent } from '@/lib/content';

export function generateMetadata({ params }) {
    const cluster = taxContent[params.cluster];
    if (!cluster) return { title: 'Not Found' };

    return {
        title: `${cluster.title} - Tax Basics for Beginners`,
        description: cluster.description,
    };
}

export default function ClusterPage({ params }) {
    const cluster = taxContent[params.cluster];

    if (!cluster) {
        notFound();
    }

    return (
        <div className="container">
            <div className="mt-4">
                <Link href="/" style={{ fontSize: '0.9rem', color: '#666' }}>← Back to Home</Link>
            </div>
            <h1>{cluster.title}</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>{cluster.description}</p>

            <div className="card-grid">
                {cluster.articles.map((article) => (
                    <Link href={`/${params.cluster}/${article.slug}`} key={article.slug} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <span style={{ color: 'var(--link)', fontWeight: 'bold' }}>Read Article →</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return Object.keys(taxContent).map((cluster) => ({
        cluster: cluster,
    }));
}
