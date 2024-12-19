import Image from 'next/image';
const CV = () => {
    return (
        <div className='flex flex-col items-center  w-full'>
            <div className="relative h-full w-full border shadow-lg ">
                <Image
                    src="./images/resume.png"
                    alt="My Resume"
                    layout="responsive"
                    objectFit="cover"
                    width={1920}
                    height={1080}
                    priority
                />
            </div>
            <div className="mt-4">
                <button className="bg-pink-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <a href="/files/Faezeh(Raha)kashir.pdf" download="rahaKashir.pdf">
                        Download
                    </a>
                </button>
            </div>
        </div>
    )
}
export default CV;