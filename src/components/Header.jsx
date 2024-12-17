import Image from 'next/image';
import Link from 'next/link';
import useConfig from '../hooks/useConfig';

const Header = () => {
    const { basePath } = useConfig();
    return (
        <nav>
            <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between">
                <Link href="/" className="cursor-pointer">
                    {/* <Image src={`${basePath}/images/Logo.png`}  className="rounded-full object-cover h-[70px]" alt="Faezeh(raha) kashir" width={70} height={70} /> */}
                    <Image src='/my-portfolio/images/Logo.png' className="rounded-full object-cover h-[70px]" alt="Faezeh(raha) kashir" width={70} height={70} />
                </Link>
                {basePath}
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="/about" className="text-gray-900 font-bold hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-900 font-bold hover:underline">Contact</Link>
                        </li>
                        <li>
                            <Link href="/cv" className="text-gray-900 font-bold hover:underline">
                                CV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

