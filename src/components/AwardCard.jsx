import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

// Create an animated version of the Card component
const MotionCard = motion(Card);

/**
 * AwardCard Component
 * Displays a single restaurant award with image, title, and subtitle,
 * animated with framer-motion entry and hover interactions.
 */
function AwardCard({ title, subtitle, imgUrl, index }) {
  return (
    <MotionCard
      // Initial state: hidden and offset to the left
      initial={{ opacity: 0, x: -60 }}
      // Animate to visible state when in viewport
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.50 }}
      // Premium spring physics for micro-interactions on hover
      whileHover={{ scale: 1.05, x: 20 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 18,
        delay: index * 0.15, // Stagger effect based on list index
      }}
      className="flex flex-row items-center gap-4 bg-transparent border-none p-4 rounded-lg hover:bg-[#1a1c1a] transition-colors duration-300"
    >
      {/* Award Badge Image */}
      <img src={imgUrl} alt={title} className="w-[80px] h-[80px] object-contain" />

      {/* Award Information */}
      <div className="flex flex-col">
        <p className="font-base text-gold text-2xl font-bold">{title}</p>
        <p className="font-alt text-gray-400 text-base mt-1 leading-[26px]">{subtitle}</p>
      </div>
    </MotionCard>
  );
}

export default AwardCard;