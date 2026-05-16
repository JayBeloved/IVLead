"use client";

import { useState, useEffect } from "react";

const images = [
  "https://imgur.com/T4h2nTW.jpg",
  "https://imgur.com/tQqoXm9.jpg",
  "https://imgur.com/TuOm5Xv.jpg",
  "https://imgur.com/r4b96SU.jpg",
  "https://imgur.com/HsKrhfH.jpg",
  "https://imgur.com/oy2hDcy.jpg",
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0b1121]">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center ${
              index === currentIndex ? "animate-ken-burns" : ""
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#0b1121]/70" />
      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-transparent to-[#0b1121]/20" />
      
      {/* Subtle glowing orbs for extra flair */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-iv-red/20 rounded-full blur-[120px] mix-blend-screen opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen opacity-40" />
    </div>
  );
}
