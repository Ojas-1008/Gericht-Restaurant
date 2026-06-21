import React from "react";
import { motion } from "framer-motion";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import heroImg from "../assets/welcome.png";
import { ArrowUpRight } from "lucide-react";

// Staggered container for left column entrance
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
};

// Slide-in from left with spring physics
const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 },
    },
};

// Slide-in from right with spring physics
const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 },
    },
};

function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-black py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-[1200px] w-full mx-auto items-center">
                
                {/* Left Column: Text Content & Staggered Animations */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-start w-full relative"
                >
                    {/* Soft ambient background glow */}
                    <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#dcca87]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

                    {/* Subheading */}
                    <motion.div variants={itemVariants}>
                        <SubHeading title="Chase The New Flavour" />
                    </motion.div>

                    {/* Main Title with metallic gradient */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-base bg-gradient-to-r from-[#F5EFDB] to-[#DCCA87] bg-clip-text text-transparent uppercase text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-wider"
                    >
                        The Key To Fine Dining
                    </motion.h1>

                    {/* Description copy */}
                    <motion.p
                        variants={itemVariants}
                        className="font-alt text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-[450px] tracking-wide"
                    >
                        Discover the art of fine dining, where culinary mastery meets premium ingredients in an atmosphere of warmth and sophistication.
                    </motion.p>

                    {/* Interactive CTA Button */}
                    <motion.div variants={itemVariants}>
                        <Button
                            variant="outline"
                            className="group rounded-none border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-wider font-bold transition-all duration-300 px-6 h-12 flex items-center gap-2"
                        >
                            Book Table
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Visual Image Showcase */}
                <motion.div
                    variants={rightItemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="group relative flex justify-center items-center w-full"
                >
                    {/* Ambient warm backlight */}
                    <div className="absolute w-[80%] h-[80%] bg-gold/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                    {/* Floating & hover responsive image container */}
                    <motion.div
                        className="relative w-full max-w-[450px] md:max-w-none lg:w-[85%] flex justify-center items-center"
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.03, rotate: 0.5 }}
                    >
                        {/* Decorative offset gold wireframe border */}
                        <div className="absolute top-4 left-4 w-full h-full border border-gold/30 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                        {/* Showcase food plate image */}
                        <img
                            src={heroImg}
                            alt="Gericht signature food plate"
                            className="w-full object-contain border-2 border-gold shadow-2xl shadow-gold/20 transition-all duration-300 group-hover:shadow-gold/30"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;