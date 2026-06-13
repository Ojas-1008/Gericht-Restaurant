import React from "react";
import { motion } from "framer-motion";
import MenuItem from "@/components/MenuItem";

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
  const wines = [
    { name: "Chapel Hill Shiraz", price: "$56", tags: "AU | Bottle" },
    { name: "Catena Malbec", price: "$59", tags: "AR | Bottle" },
    { name: "La Vieille Ferme", price: "$44", tags: "FR | 750ml" },
    { name: "Primitivo di Manduria", price: "$62", tags: "IT | Bottle" },
  ];

  return (
    <section className="bg-black text-white p-12">
      {/* Section Header */}
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-8 lg:mb-12 font-semibold">
        Our Menu
      </h2>

      {/* Grid container with staggered entry animations on scroll */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-[1200px] mx-auto px-4"
      >
        {wines.map((wine, index) => (
          <MenuItem
            key={index}
            name={wine.name}
            price={wine.price}
            tags={wine.tags}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Menu;