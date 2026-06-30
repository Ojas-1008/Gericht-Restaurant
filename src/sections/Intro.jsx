import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import mealVideo from "../assets/meal.mp4";

/**
 * Intro Section
 * Renders a full-screen background video with an interactive overlay and play/pause controls.
 */
function Intro() {
    // Playback state of the video
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Reference to control the HTML5 video element directly
    const videoRef = useRef(null);

    // Toggles video playback and syncs the play state
    const handleVideoPlay = () => {
        const videoDOM = videoRef.current;
        if (!videoDOM) return;

        if (isPlaying) {
            videoDOM.pause();
            setIsPlaying(false);
        } else {
            videoDOM.play();
            setIsPlaying(true);
        }
    };

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-screen relative bg-black flex justify-center items-center overflow-hidden"
        >
            {/* Background HTML5 Video */}
            <video
                src={mealVideo}
                loop
                muted
                defaultMuted
                playsInline
                ref={videoRef}
                className="w-full h-full object-cover"
            />
            
            {/* Dark Overlay (Fades out when video plays, passing mouse clicks through) */}
            <motion.div
                animate={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? "none" : "auto" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-black/50 flex justify-center items-center transition-all duration-500"
            >
                {/* Pulsing circular play/pause button trigger */}
                <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeOut"
                    }}
                    onClick={handleVideoPlay} 
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-gold flex justify-center items-center cursor-pointer bg-black/20 hover:bg-black/40"
                >
                    {isPlaying ? (
                        <Pause className="text-gold size-8 md:size-12" />
                    ) : (
                        <Play className="text-gold size-8 md:size-12" />
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Intro;