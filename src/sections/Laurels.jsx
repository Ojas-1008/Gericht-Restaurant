import React from "react";
import { motion } from "framer-motion";
import SubHeading from "@/components/SubHeading";
import AwardCard from "@/components/AwardCard";
import { Separator } from "@/components/ui/separator";
import { awards } from "@/constants/data";
import laurelsImg from "@/assets/laurels.png";

/**
 * Laurels Component
 * Showcase of restaurant professional awards & recognitions.
 */
function Laurels() {
    return (
        <section className="bg-black min-h-screen py-20 px-16 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
            {/* Split layout: 1 column on mobile, 2 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-[1200px] w-full mx-auto items-center">

                {/* Left Column: Section Header & Awards List */}
                <div className="flex flex-col w-full items-start">
                    <SubHeading title="Awards & Recognition" />
                    <motion.h2
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6 }}
                        className="font-base text-gold text-4xl md:text-5xl lg:text-6xl font-semibold capitalize tracking-wider mb-4">Our Laurels</motion.h2>
                    <Separator className="bg-gold/20 my-6 w-full max-w-[120px]" />

                    {/* Awards Grid mapping the data */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 w-full mt-8 place-items-stretch">
                        {awards.map((award, index) => (
                            <AwardCard
                                key={award.title}
                                title={award.title}
                                subtitle={award.subtitle}
                                imgUrl={award.imgUrl}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Image display */}
                <div className="flex justify-center items-center w-full">
                    <motion.img
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 9,
                            duration: 1.2
                        }}
                        src={laurelsImg} className="w-full max-w-[400px] md:max-w-[500px] h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}

export default Laurels;
