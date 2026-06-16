import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import gerichtLogo from "../assets/gericht.png";

/**
 * Navbar Component
 * Renders a responsive header that transitions to a blurred background on scroll
 * and displays a slide-down full-screen overlay menu on mobile screens.
 */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitors window scroll position to toggle sticky glassmorphism style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      // Page entry animation (soft drop-down using spring physics)
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
      }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-black/80 border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Brand Logo */}
      <a href="#home" className="flex items-center">
        <img src={gerichtLogo} alt="Gericht Logo" className="w-[150px]" />
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-10 items-center">
        <li>
          <a
            href="#home"
            className="relative group font-base text-white hover:text-gold transition-colors text-lg uppercase tracking-wider"
          >
            Home
            {/* Sliding underline grow effect on hover */}
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="relative group font-base text-white hover:text-gold transition-colors text-lg uppercase tracking-wider"
          >
            About
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className="relative group font-base text-white hover:text-gold transition-colors text-lg uppercase tracking-wider"
          >
            Menu
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#awards"
            className="relative group font-base text-white hover:text-gold transition-colors text-lg uppercase tracking-wider"
          >
            Awards
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative group font-base text-white hover:text-gold transition-colors text-lg uppercase tracking-wider"
          >
            Contact
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
      </ul>

      {/* Desktop Actions (Login & Reservation Call-To-Action) */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="#login"
          className="font-base text-white hover:text-gold text-lg transition-colors"
        >
          Log In / Register
        </a>
        <div className="w-[1px] h-6 bg-white/20"></div>
        <Button className="bg-gold hover:bg-gold/80 text-black font-semibold rounded-none tracking-wider uppercase transition-colors px-6 h-10 font-base text-md">
          Book Table
        </Button>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <Menu
          className="text-white w-7 h-7 cursor-pointer hover:text-gold hover:scale-110 transition-transform duration-200"
          onClick={() => setIsMobileOpen(true)}
        />
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center z-50"
          >
            <ul className="flex flex-col gap-8 items-center">
              <li>
                <a
                  href="#home"
                  className="font-base text-white hover:text-gold transition-colors text-xl uppercase tracking-wider"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-base text-white hover:text-gold transition-colors text-xl uppercase tracking-wider"
                  onClick={() => setIsMobileOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="font-base text-white hover:text-gold transition-colors text-xl uppercase tracking-wider"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  className="font-base text-white hover:text-gold transition-colors text-xl uppercase tracking-wider"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-base text-white hover:text-gold transition-colors text-xl uppercase tracking-wider"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Close Icon Button */}
            <X
              className="text-white w-7 h-7 absolute top-6 right-8 cursor-pointer hover:text-gold hover:scale-110 transition-transform duration-200"
              onClick={() => setIsMobileOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;