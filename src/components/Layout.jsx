import { useRouter } from 'next/router';
import { pinkinator } from 'pinkinator';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Layout = ({ children }) => {
    const router = useRouter();
    const [pinkColor, setPinkColor] = useState('#FCE7F3');

    useEffect(() => {
        setPinkColor(pinkinator());
    }, [router.pathname]);

    const isHomePage = router.pathname === "/"
    const layoutClasses = isHomePage ? "background-homePage" : "";
    const backgroundStyle = isHomePage
        ? { backgroundImage: `url(${basePath}/images/background-homePage.jpeg)` }
        : { backgroundImage: `linear-gradient(135deg, ${pinkColor}33 0%, #FCE7F3 60%, #FFFFFF 100%)` };
    return (
        <div className={`flex flex-col min-h-screen ${layoutClasses}`} style={backgroundStyle}>
            <Header />
            <main className={`flex-grow ${isHomePage ? 'max-md:flex max-md:flex-col' : ''}`}>
                <div className={`container mx-auto p-4 ${isHomePage ? 'max-md:flex-1 max-md:flex max-md:flex-col' : ''}`}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
