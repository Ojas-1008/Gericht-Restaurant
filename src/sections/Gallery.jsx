import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';

import gallery01 from '../assets/gallery01.png';
import gallery02 from '../assets/gallery02.png';
import gallery03 from '../assets/gallery03.png';
import gallery04 from '../assets/gallery04.png';

// Custom Instagram SVG Icon component
const Instagram = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const galleryArray = [gallery01, gallery02, gallery03, gallery04];

function Gallery() {
  const scrollRef = useRef(null);

  // Scroll handler for horizontal navigation controls
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (direction === 'left') {
      container.scrollLeft -= 300;
    } else {
      container.scrollLeft += 300;
    }
  };

  return (
    <section id='gallery' className='bg-black py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 items-center justify-between max-w-[1200px] w-full mx-auto overflow-hidden'>
      
      {/* Left Column: Heading, description, and Instagram link */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='flex flex-col justify-center items-start w-full lg:max-w-[450px]'>
        <SubHeading title="Instagram" />
        <h2 className='font-base text-gold text-4xl md:text-5xl lg:text-6xl font-semibold capitalize tracking-wider mb-4'>Photo Gallery</h2>
        <p className="font-alt text-white/70 text-sm md:text-base leading-relaxed mb-8">
          Our gallery showcases the art of culinary passion, capturing visual stories from the heart of our kitchen.
        </p>
        <Button variant='outline' className="rounded-none border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 px-6 h-10">
          <Instagram className='w-4 h-4' />
          Gallery
        </Button>
      </motion.div>

      {/* Right Column: Scrollable cards and controls */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full lg:flex-1 min-w-0 relative'>
        
        {/* Horizontal scroll container with scroll snap */}
        <div
          className='flex flex-row gap-6 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth'
          ref={scrollRef}>
          {galleryArray.map((image, index) => (
            
            // Individual image cards with interactive hover effects
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className='flex-none snap-start snap-always w-[240px] md:w-[280px] aspect-[3/4] relative overflow-hidden rounded-lg cursor-pointer group'
            >
              <img
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                src={image} />
              
              {/* Instagram overlay on hover */}
              <div className='absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all duration-300'>
                <Instagram className="text-gold w-10 h-10 md:w-12 md:h-12 transform scale-90 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll navigation arrows */}
        <div className='flex justify-end gap-4 w-full mt-6 pr-4'>
          <ArrowLeft className='w-12 h-12 rounded-full border border-gold text-gold flex justify-center items-center cursor-pointer hover:bg-gold hover:text-black transition-colors duration-500' onClick={() => scroll('left')} />
          <ArrowRight className='w-12 h-12 rounded-full border border-gold text-gold flex justify-center items-center cursor-pointer hover:bg-gold hover:text-black transition-colors duration-500' onClick={() => scroll('right')} />
        </div>
      </motion.div>
    </section>
  );
}

export default Gallery;