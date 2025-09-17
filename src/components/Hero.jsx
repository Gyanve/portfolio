import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-noise opacity-20"></div>

            {/* Content */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-32"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl">
                    Hi, I’m <span className="text-primary-600">Gyanve!</span>
                </h1>
                <br />
                <p>
                    Building fast, responsive web apps — powered by code, coffee, and a dash of AI ingenuity.

                </p>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                    Frontend Developer | React | JavaScipt | AI Enthusiast
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-secondary">Contact Me</a>
                </div>
            </motion.div>
        </section>
    );
}
