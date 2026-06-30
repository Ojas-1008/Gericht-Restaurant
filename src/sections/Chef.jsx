import React from "react";
import { motion } from "framer-motion";
import SubHeading from "@/components/SubHeading";
import { Card } from "@/components/ui/card";
import chefImg from "../assets/chef.png";
import signImg from "../assets/sign.png";
import quoteImg from "../assets/quote.png";

// Framer Motion: Staggers the entry animations of child components
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.1
        }
    }
};

// Framer Motion: Slide up and fade in animation for individual text blocks
const childVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

/**
 * Chef Section
 * Displays the chef's philosophy quote, name, signature, and an entry-animated image.
 */
function Chef() {
    return (
        <section className="bg-black min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden" id="chef">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-[1200px] w-full mx-auto items-center">
                
                {/* Left Side: Chef Image (Enters from left with rotation) */}
                <div className="flex justify-center items-center w-full">
                    <motion.img
                        initial={{ opacity: 0, x: -60, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, amount: 0.50 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut"
                        }}
                        src={chefImg} 
                        className="w-full max-w-[400px] md:max-w-none h-auto object-contain"
                    />
                </div>
                
                {/* Right Side: Chef philosophy text block with staggered animations */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.50 }}
                    className="flex flex-col justify-center items-start w-full"
                >
                    <motion.div variants={childVariants}>
                        <SubHeading title="Chef's Word" />
                    </motion.div>

                    <motion.h2
                        variants={childVariants}
                        className="font-base text-gold text-4xl md:text-5xl lg:text-6xl font-semibold capitalize tracking-wider mb-10"
                    >
                        What We Believe In
                    </motion.h2>

                    <motion.div variants={childVariants} className="w-full">
                        <Card className="bg-transparent border-l-4 border-y-0 border-r-0 rounded-none shadow-none p-6 mb-8 w-full border-gold">
                            <img 
                                src={quoteImg} 
                                className="w-[40px] h-auto object-contain inline-block mr-3 mb-2 align-top" 
                                alt="quote" 
                            />
                            <p className="font-alt italic text-gray-400 text-lg leading-relaxed inline">
                                We believe that cooking is not just about combining ingredients, but an expression of passion and standard. Every plate that leaves our kitchen carries our dedication to craftsmanship, authentic flavor, and the highest standards of culinary excellence.
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        variants={childVariants}
                        className="w-full"
                    >
                        <p className="font-base text-gold text-2xl tracking-wider capitalize">Kevin Luo</p>
                        <p className="font-alt text-gray-400 text-sm mt-1 uppercase tracking-widest">Chef & Founder</p>
                        <img src={signImg} alt="Chef Signature" className="w-[150px] h-auto object-contain mt-8" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Chef;