"use client";

import { useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import SecretFile from "@/components/rakhi/SecretFile";
import Hero from "@/components/rakhi/Hero";
import Story from "@/components/rakhi/Story";
import MemoryGallery from "@/components/rakhi/MemoryGallery";
import SisterReport from "@/components/rakhi/SisterReport";
import Evidence from "@/components/rakhi/Evidence";
import EmotionalLetter from "@/components/rakhi/EmotionalLetter";
import Timeline from "@/components/rakhi/Timeline";
import RakhiWish from "@/components/rakhi/RakhiWish";
import FinalReveal from "@/components/rakhi/FinalReveal";
import Signature from "@/components/rakhi/Signature";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function KomalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpen = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 800);
  };

  return (
    <main className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#FDFBF7] text-[#2D2D2D] font-sans antialiased overflow-x-hidden selection:bg-[#602020] selection:text-[#FDFBF7]`}>
      
      <div 
        className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-0 pointer-events-none -translate-y-8" : "opacity-100"
        } ${isTransitioning ? "scale-105" : ""}`}
      >
        {!isOpen && <SecretFile onOpen={handleOpen} />}
      </div>

      <div className={`transition-opacity duration-1000 delay-300 ${isOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
        {isOpen && (
          <>
            <Hero />
            <Story />
            <MemoryGallery />
            <SisterReport />
            <Evidence />
            <EmotionalLetter />
            <Timeline />
            <RakhiWish />
            <FinalReveal />
            <Signature />
          </>
        )}
      </div>
      
    </main>
  );
}
