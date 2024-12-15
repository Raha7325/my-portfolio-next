import Image from 'next/image';
import Logo from '../../public/logo.png'
const Header = () => {
    return (
        <nav className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between">
                <div>
                    <Image src={Logo} className="rounded-full object-cover h-[70px]" alt="Faezeh(raha) kashir" width={70} />
                </div>
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Cv</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

