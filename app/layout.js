import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata = {
    title: 'Tax Basics for Beginners – Simple Guide to Understand Income Tax',
    description: 'A simple, beginner-friendly guide to understanding income tax. Learn basics, types of income, deductions, and how to file. Includes free tax calculators.',
    verification: {
        google: 'l-g4wLIKrROeA-nAcZkmIL8xWnkfLB_3LQeGM6juwAo',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main style={{ minHeight: '80vh' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
