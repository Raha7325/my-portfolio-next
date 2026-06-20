import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Layout = ({ children }) => {
    const router = useRouter();

    const isHomePage = router.pathname === "/"
    const layoutClasses = isHomePage ? "background-homePage" : "bg-pink-100";
    const backgroundStyle = isHomePage ? { backgroundImage: `url(${basePath}/images/background-homePage.jpeg)` } : {};
    return (
        <div className={`flex flex-col min-h-screen ${layoutClasses}`} style={backgroundStyle}>
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto p-4">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
