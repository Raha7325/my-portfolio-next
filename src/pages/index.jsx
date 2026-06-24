import { pinkinator } from 'pinkinator';
import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

const stagger = {
    animate: { transition: { staggerChildren: 0.25 } },
};

const slideLeft = {
    initial: { x: -80, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
    const [mounted, setMounted] = useState(false);
    const [endColor, setEndColor] = useState('#dc77ad');
    const [demoGradient, setDemoGradient] = useState('linear-gradient(135deg, #ff6a8f, #ff31b2)');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setMounted(true);
        setEndColor(pinkinator({ intensity: 180 }));
        setDemoGradient(pinkinator({ gradient: true }));
    }, []);

    const gradient = `linear-gradient(to right, #000000, ${endColor})`;

    const regenerate = useCallback(() => {
        const newColor = pinkinator({ intensity: 180 });
        setEndColor(newColor);
        setDemoGradient(pinkinator({ gradient: true }));
    }, []);

    const copyColor = useCallback(() => {
        navigator.clipboard.writeText(endColor);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }, [endColor]);

    return (
        <motion.div
            className="max-w-screen-xl py-3 mx-auto feat flex flex-col  items-start h-full container"
            variants={stagger}
            initial="initial"
            animate="animate"
        >
            <div className="flex flex-col text-left">
            <motion.strong
                className="text-5xl md:text-9xl linear-color-title text-left leading-tight mb-4 block w-full"
                style={{ backgroundImage: gradient }}
                variants={slideLeft}
            >
                Hi,
            </motion.strong>
            <motion.span
                className="text-5xl md:text-9xl linear-color-title text-left leading-tight mb-4 block w-full"
                style={{ backgroundImage: gradient }}
                variants={slideLeft}
            >
                I'm Raha
            </motion.span>
            <motion.span
                className="text-4xl md:text-7xl linear-color-title text-left mt-4 block w-full"
                style={{ backgroundImage: gradient }}
                variants={slideLeft}
            >
                a FrontEnd Developer
            </motion.span>
            </div>

            <motion.div
                className="w-full max-w-sm max-md:mt-auto md:mt-2"
                variants={slideLeft}
            >
                <div className="rounded-xl border border-gray-200/40 bg-white/20 backdrop-blur-sm p-6 shadow-sm text-center">
                    <h3 className="text-sm font-semibold text-gray-300 tracking-wide uppercase mb-4">
                        Powered by <a href="https://www.npmjs.com/package/pinkinator" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-pink-600 transition-colors">pinkinator</a>
                    </h3>

                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-300">Color</span>
                            <div
                                className="w-8 h-8 rounded-lg border border-gray-200 shadow-sm transition-colors duration-300"
                                style={{ backgroundColor: endColor }}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-300">Gradient</span>
                            <div
                                className="w-14 h-8 rounded-lg border border-gray-200 shadow-sm transition-all duration-300"
                                style={{ backgroundImage: demoGradient }}
                            />
                        </div>
                    </div>

                    <button
                        onClick={regenerate}
                        className="text-xs px-4 py-2 rounded-lg font-medium text-white transition-all hover:brightness-110 active:scale-95"
                        style={{ backgroundColor: endColor }}
                    >
                        ✦ Generate new
                    </button>

                    <p className="text-xs text-gray-300 font-mono mt-2 cursor-pointer hover:text-gray-100 transition-colors" onClick={copyColor}>
                        {copied ? 'Copied!' : endColor}
                    </p>
                </div>
            </motion.div>

            <div className="background-homePage"></div>
        </motion.div>
    )
}

export default Home;