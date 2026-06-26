import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

/**
 * MenuItem Component
 * Renders a single restaurant dish/drink with names, prices, and tags.
 * Features entry stagger animations, hover lift, and an animated drawn-in connecting line.
 */
function MenuItem({ name, price, tags }) {
  // Spring entry variants (staggered via parent Menu container)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="flex flex-col gap-1 w-full bg-transparent border-none shadow-none hover:bg-white/6 p-4 rounded-lg transition-all duration-300">
        <div className="flex justify-between items-center w-full">
          {/* Item Name */}
          <p className="font-base text-gold text-lg lg:text-2xl capitalize font-semibold">
            {name}
          </p>

          {/* Animated Connecting Line (scales horizontally on scroll, solidifies on card hover) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 h-[1px] border-b border-dashed border-gold/40 group-hover/card:border-gold group-hover/card:border-solid mx-4 self-center transition-all duration-300"
          />

          {/* Item Price */}
          <p className="font-base text-white text-lg lg:text-2xl font-semibold">
            {price}
          </p>
        </div>

        {/* Item Tags / Descriptions */}
        <div className="w-full mt-1">
          <p className="font-alt text-gray-400 text-sm lg:text-base capitalize">
            {tags}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default MenuItem;