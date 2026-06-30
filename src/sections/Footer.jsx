import React from 'react';
import { motion } from 'framer-motion';
import FooterOverlay from '@/components/FooterOverlay';
import SubHeading from '@/components/SubHeading';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import gerichtLogo from '../assets/gericht.png';
import spoonImg from '../assets/spoon.svg';

const Facebook = ({ className, ...props }) => (
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const Twitter = ({ className, ...props }) => (
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

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

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-black w-full flex flex-col justify-center items-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            <FooterOverlay className='z-10' />
            <div className="relative z-10 w-full max-w-[800px] border border-gold/20 bg-black py-12 px-8 flex flex-col items-center justify-center text-center mb-20 shadow-lg">
                <SubHeading title="Newsletter" />
                <h2 className='font-base text-gold text-3xl md:text-4xl lg:text-5xl font-semibold capitalize tracking-wider mb-4'>Subscribe to Our Newsletter</h2>
                <p className='font-alt text-white/80 text-sm md:text-base mb-8'>And never miss latest Updates!</p>
                <form className='flex flex-col sm:flex-row gap-4 w-full max-w-[620px] items-center justify-center'>
                    <Input type="email" placeholder="Enter your email address" className="bg-transparent border border-gold/30 text-white rounded-none transition-all duration-500 px-4 py-2 h-12 w-full focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold outline-none" />
                    <Button variant="outline" className="rounded-none border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-wider transition-all duration-500 px-8 h-12 w-full sm:w-auto">Subscribe</Button>
                </form>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-[1200px] w-full mx-auto items-start text-center mb-16">
                <Separator className="bg-white/10 my-6 md:hidden" />
                <div className='flex flex-col items-center w-full gap-4'>
                    <h2 className='font-base text-white text-2xl font-semibold mb-2 capitalize'>Contact Us</h2>
                    <p className='font-alt text-white/50 text-sm leading-relaxed'>9 W 53rd St, New York, NY 10019, USA</p>
                    <p className='font-alt text-white/50 text-sm leading-relaxed'>+1 212-344-1230</p>
                    <p className='font-alt text-white/50 text-sm leading-relaxed'>+1 212-555-1230</p>
                </div>
                <Separator className="bg-white/10 my-6 md:hidden" />
                <div className='flex flex-col items-center w-full gap-6'>
                    <img src={gerichtLogo} className='w-[200px] object-contain mx-auto' />
                    <p className='font-alt text-white/80 text-sm italic max-w-[350px] leading-relaxed'>The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others</p>
                    <img src={spoonImg} className="w-[45px] object-contain mt-1" alt="spoon separator" />
                    <div className='flex gap-4 mt-3 justify-center items-center'>
                        <motion.a
                            href="#"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="text-white hover:text-gold transition-colors duration-300 cursor-pointer"
                        >
                            <Facebook className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="text-white hover:text-gold transition-colors duration-300 cursor-pointer"
                        >
                            <Twitter className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="text-white hover:text-gold transition-colors duration-300 cursor-pointer"
                        >
                            <Instagram className="w-8 h-8" />
                        </motion.a>
                    </div>
                </div>
                <Separator className="bg-white/10 my-6 md:hidden" />
                <div className='flex flex-col items-center w-full gap-4'>
                    <h3 className='font-base text-white text-2xl font-semibold mb-2 capitalize'>Working Hours</h3>
                    <p className='font-alt text-white/50 text-sm leading-relaxed'>Monday-Friday: 08:00 am - 12:00 am</p>
                    <p className='font-alt text-white/50 text-sm leading-relaxed'>Saturday-Sunday: 07:00 am - 11:00 pm</p>
                </div>
            </div>
            <div className="relative z-10 w-full text-center text-white/50 text-xs md:text-sm mt-12 border-t border-white/5 pt-8">2026 Gericht. All Rights Reserved.</div>
        </motion.footer>
    );
}

export default Footer;
