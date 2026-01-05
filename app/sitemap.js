import { taxContent } from '@/lib/content';

export default function sitemap() {
    const baseUrl = 'https://tax-simplified.vercel.app';

    // Static Pages
    const staticRoutes = [
        '',
        '/tools',
        '/about',
        '/contact',
        '/privacy-policy',
        '/disclaimer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Cluster & Article Pages
    let contentRoutes = [];

    Object.entries(taxContent).forEach(([clusterKey, cluster]) => {
        // 1. Cluster Index Page (e.g., /tax-fundamentals)
        contentRoutes.push({
            url: `${baseUrl}/${clusterKey}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        });

        // 2. Individual Article Pages (e.g., /tax-fundamentals/what-is-income-tax)
        cluster.articles.forEach((article) => {
            contentRoutes.push({
                url: `${baseUrl}/${clusterKey}/${article.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    });

    return [...staticRoutes, ...contentRoutes];
}
