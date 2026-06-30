import React from 'react';
import { motion } from 'framer-motion';

import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import findusImg from '../assets/findus.png';

function FindUs() {
  return (
    <section id="contact" className="bg-black min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      
      {/* Two-column layout grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-[1200px] w-full mx-auto items-center">
        
        {/* Left Column: Contact info & opening hours */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-start w-full"
        >
          <SubHeading title="Contact" />
          <h2 className="font-base text-gold text-4xl md:text-5xl lg:text-6xl font-semibold capitalize tracking-wider mb-8">Find Us</h2>
          
          <p className="font-alt text-white/70 text-sm md:text-base leading-relaxed mb-6">
            Lane Ends Bungalow, Whatsteads Croft Road, Gatherwell, West Yorkshire, WS4 9FL
          </p>
          
          <Separator className="bg-gold/20 my-6 w-full max-w-[100px]" />
          
          <div className="flex flex-col gap-2">
            <p className="font-base text-white text-xl md:text-2xl font-bold uppercase tracking-wider mb-4">Opening Hours</p>
            <p className="font-alt text-white/70 text-sm md:text-base">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="font-alt text-white/70 text-sm md:text-base mb-8">Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="outline" className="rounded-none border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-wider transition-all duration-300 px-6 h-10">
              Visit Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Restaurant photo display */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center w-full"
        >
          <img 
            src={findusImg} 
            alt="find us" 
            className="w-full max-w-[400px] md:max-w-none h-auto object-contain" 
          />
        </motion.div>

      </div>
    </section>
  );
}

export default FindUs;
