import React from "react";
import { motion } from "framer-motion";
import spoonImg from "../assets/spoon.svg";
import { Separator } from "./ui/separator";

/**
 * SubHeading component with gold typography, 
 * a slide-in decorative spoon, and an expanding divider.
 */
function SubHeading({ title }) {
  return (
    <div className="flex flex-col mb-4">
      {/* 1. Title: Fades and slides down into view */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-base text-gold uppercase text-2xl md:text-3xl tracking-wider"
      >
        {title}
      </motion.p>

      {/* 2. Spoon: Slides in from the left */}
      <motion.img
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        src={spoonImg}
        alt="spoon_image"
        className="w-[60px] md:w-[75px] mt-2"
      />

      {/* 3. Divider: Scales horizontally outward from the left edge */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="origin-left"
      >
        <Separator className="bg-gold/40 my-2 w-24 md:w-32 mt-3" />
      </motion.div>
    </div>
  );
}

export default SubHeading;