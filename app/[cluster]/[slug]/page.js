import Link from 'next/link';
import { notFound } from 'next/navigation';
import { taxContent } from '@/lib/content';
import ReadMoreLinks from '@/components/ReadMoreLinks';

export function generateMetadata({ params }) {
    const cluster = taxContent[params.cluster];
    if (!cluster) return { title: 'Not Found' };

    const article = cluster.articles.find(a => a.slug === params.slug);
    if (!article) return { title: 'Not Found' };

    return {
        title: article.title,
        description: article.description,
    };
}

export default function ArticlePage({ params }) {
    const cluster = taxContent[params.cluster];
    if (!cluster) notFound();

    const article = cluster.articles.find(a => a.slug === params.slug);
    if (!article) notFound();

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <div className="mt-4" style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                <Link href="/" style={{ color: '#666' }}>Home</Link>
                <span style={{ margin: '0 5px' }}>/</span>
                <Link href={`/${params.cluster}`} style={{ color: '#666' }}>{cluster.title}</Link>
                <span style={{ margin: '0 5px' }}>/</span>
                <span style={{ color: 'var(--text)' }}>{article.title}</span>
            </div>

            <article>
                <h1>{article.title}</h1>
                <div
                    style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </article>

            <ReadMoreLinks currentSlug={params.slug} cluster={cluster} />

            <div style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', fontSize: '0.9rem', borderRadius: '8px' }}>
                <strong>Note:</strong> This article is for educational purposes. <Link href="/disclaimer">Read Disclaimer</Link>.
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    let paths = [];
    Object.keys(taxContent).forEach((clusterKey) => {
        taxContent[clusterKey].articles.forEach((article) => {
            paths.push({
                cluster: clusterKey,
                slug: article.slug,
            });
        });
    });
    return paths;
}
