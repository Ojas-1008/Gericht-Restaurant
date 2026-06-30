import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import watermarkImg from "../assets/G.png";
import knifeImg from "../assets/knife.png";

function About() {
    return (
        <section className="relative bg-black min-h-screen flex justify-center items-center overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-24">
            {/* Background spinning G watermark */}
            <motion.img
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="opacity-40 w-[80%] md:w-[60%] lg:w-[45%] max-w-[450px] absolute"
                src={watermarkImg}
                alt="watermark"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] w-full mx-auto items-center gap-12 md:gap-8 z-10">
                {/* Left Column: About Us */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.50 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                    className="md:col-span-1 flex flex-col justify-center items-center md:items-end text-center md:text-right w-full"
                >
                    <h1 className="font-base text-4xl md:text-5xl lg:text-6xl text-gold font-bold uppercase tracking-wider">
                        About Us
                    </h1>
                    <Separator className="bg-gold my-4 w-16" />
                    <p className="font-alt text-white/70 text-base md:text-lg leading-relaxed my-6 tracking-wide">
                        Born from a deep-rooted passion for culinary craftsmanship and timeless heritage, Gericht was founded to elevate fine dining into an unforgettable art form. Our mission is to marry the freshest seasonal ingredients with innovative techniques, creating exceptional flavors and a warm, sophisticated space where every meal becomes a cherished memory.
                    </p>
                    <Button className="rounded-none border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-wider transition-all duration-600">
                        Know More
                    </Button>
                </motion.div>

                {/* Central Column: Knife Image with Glow */}
                <div className="flex justify-center items-center md:col-span-1 relative z-20">
                    <div className="absolute w-[300px] h-[300px] bg-gold/30 rounded-full blur-[100px] pointer-events-none -z-10" />
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.50 }}
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 0.7 },
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        src={knifeImg}
                        className="-mt-20 -mb-20 md:-mt-32 md:-mb-32 h-[350px] md:h-[500px] lg:h-[640px] object-contain drop-shadow-2xl"
                        alt="knife decorative image"
                    />
                </div>

                {/* Right Column: Our History */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.50 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                    className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full"
                >
                    <h1 className="font-base text-4xl md:text-5xl lg:text-6xl text-gold font-bold uppercase tracking-wider">
                        Our History
                    </h1>
                    <Separator className="bg-gold my-4 w-16" />
                    <p className="font-alt text-white/70 text-base md:text-lg leading-relaxed my-6 tracking-wide">
                        Our culinary heritage is rooted in the rich traditions of gastronomy, passed down through generations of master chefs. We honor time-tested cooking methods while seamlessly blending classical techniques with modern flavor profiles, ensuring every dish we serve tells an exquisite story of craftsmanship, dedication, and deep respect for our ingredients.
                    </p>
                    <Button className="rounded-none border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-wider transition-all duration-600">
                        Know More
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default About;