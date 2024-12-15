import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png'
const Header = () => {
    return (
        <nav className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between">
                <Link href="/" className="cursor-pointer">
                    <Image src={Logo} className="rounded-full object-cover h-[70px]" alt="Faezeh(raha) kashir" width={70} />
                </Link>
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="/about" className="text-gray-900 dark:text-white hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-900 dark:text-white hover:underline">Download CV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

