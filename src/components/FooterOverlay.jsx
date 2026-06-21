import React from "react";
import overlayBg from "../assets/overlaybg.png";

function FooterOverlay() {
    return (
        <div className="absolute inset-0 -z-10 flex flex-col w-full h-full">
            <div className="absolute inset-0 bg-black/60 -z-10" />
            <div
                className="w-full h-full bg-cover bg-repeat bg-center"
                style={{ backgroundImage: `url(${overlayBg})` }}
            />
        </div>
    );
}

export default FooterOverlay;