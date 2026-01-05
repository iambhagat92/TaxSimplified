export default function ReadMoreLinks({ currentSlug, cluster }) {
    if (!cluster || !cluster.articles) return null;

    const currentIndex = cluster.articles.findIndex(a => a.slug === currentSlug);
    const prev = currentIndex > 0 ? cluster.articles[currentIndex - 1] : null;
    const next = currentIndex < cluster.articles.length - 1 ? cluster.articles[currentIndex + 1] : null;

    if (!prev && !next) return null;

    return (
        <div className="mt-4 border-t pt-4">
            <h3 className="text-lg font-semibold mb-3">Read More</h3>
            <div className="flex flex-col gap-2">
                {prev && (
                    <a href={`/${cluster.slug}/${prev.slug}`} className="text-blue-600 hover:underline">
                        ← Previous: {prev.title}
                    </a>
                )}
                {next && (
                    <a href={`/${cluster.slug}/${next.slug}`} className="text-blue-600 hover:underline">
                        Next: {next.title} →
                    </a>
                )}
            </div>
        </div>
    );
}
