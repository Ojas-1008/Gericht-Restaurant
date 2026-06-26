import React from "react";
import { motion } from "framer-motion";
import MenuItem from "@/components/MenuItem";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import { wines, cocktails } from "@/constants/data";

// Parent variants that coordinate the staggered animations of its children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between rendering each menu item
    },
  },
};

/**
 * Menu Component
 * Renders the restaurant's menu section.
 * Features a responsive grid (2 columns on laptop screens) and staggered load animations.
 */
function Menu() {

  return (
    <section className="bg-black min-h-screen py-20 px-6 md:px-12 lg:px-26 flex flex-col justify-center items-center relative w-full">

      <div className="flex flex-col items-center text-center mb-16">
        <SubHeading title="Bar Menu" />
        <h2 className="font-base text-gold text-4xl md:text-5xl lg:text-6xl font-semibold capitalize tracking-wider">Menu That Fits Your Palate</h2>
      </div>

      {/* Grid container with staggered entry animations on scroll */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-[1200px] w-full mx-auto px-4 mb-16"
      >
        <div className="flex flex-col w-full">
          <h3 className="font-base text-white text-3xl lg:text-4xl font-semibold mb-8 tracking-wider text-center">Wine & Beer</h3>
          {wines.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>

        <div className="flex flex-col w-full">
          <h3 className="font-base text-white text-3xl lg:text-4xl font-semibold mb-8 tracking-wider text-center">Cocktails</h3>
          {cocktails.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center w-full mt-8">
        <Button className="rounded-none border-gold text-gold hover:bg-gold hover:text-black transition-all duration-500 uppercase tracking-wider px-6 h-10">View More</Button>
      </div>
    </section>
  );
}

export default Menu;