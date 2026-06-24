import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Header = () => {
    const { pathname } = useRouter();

    const linkClass = (href) =>
        `font-bold transition-colors ${pathname === href ? 'text-pink-600 underline' : 'text-gray-900 hover:underline'}`;

    return (
        <nav>
            <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between">
                <Link href="/" className="cursor-pointer">
                    <Image src={`${basePath}/images/Logo.png`} className="rounded-full object-cover h-[70px]" alt="Raha(Faezeh) kashir" width={70} height={70} />
                </Link>
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="/about" className={linkClass('/about')}>About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
                        </li>
                        <li>
                            <Link href="/cv" className={linkClass('/cv')}>CV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

