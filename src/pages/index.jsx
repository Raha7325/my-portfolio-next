import { motion } from 'framer-motion';

const stagger = {
    animate: { transition: { staggerChildren: 0.25 } },
};

const slideLeft = {
    initial: { x: -80, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
    return (
        <motion.div
            className="max-w-screen-xl px-4 py-3 mx-auto feat flex flex-col justify-center items-start h-full pl-8 container mx-auto"
            variants={stagger}
            initial="initial"
            animate="animate"
        >
            <motion.strong
                className="text-6xl md:text-9xl linear-color-title text-left leading-tight"
                variants={slideLeft}
            >
                Hi,
            </motion.strong>
            <motion.span
                className="text-6xl md:text-9xl linear-color-title text-left leading-tight"
                variants={slideLeft}
            >
                I'm Raha
            </motion.span>
            <motion.span
                className="text-4xl md:text-7xl linear-color-title text-center mt-4"
                variants={slideLeft}
            >
                a FrontEnd Developer
            </motion.span>
            <div className="background-homePage"></div>
        </motion.div>
    )
}

export default Home;