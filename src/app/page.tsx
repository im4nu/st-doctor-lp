"use client";

import Navbar from "~/components/Navbar";
import HeroSection from "~/components/Hero";
import Banner from "~/components/Banner";
import ServicesSection from "~/components/Services";
import SystemPreviewSection from "~/components/SystemPreview";
import FeedbackSection from "~/components/Feedback";
import { ArrowUp2, Whatsapp } from "iconsax-react";
import LGPDBanner from "~/components/LGPD";
import Footer from "~/components/Footer";
import { Carousel } from "~/components/Carousel";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setIsScrollAtTop(isAtTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="flex h-full w-screen flex-col items-center justify-between bg-white-200 font-medium text-black-100">
      <Navbar isScrollAtTop={isScrollAtTop} />
      <HeroSection />
      <LGPDBanner />
      <Carousel />
      <ServicesSection />
      <SystemPreviewSection />
      <FeedbackSection />
      <Banner />
      <Footer />
      <div className="flex flex-col items-center gap-3 right-4 bottom-4 fixed">
        <a
          href="#home"
          className="flex rounded-full p-4 bg-green-700 text-[#E8E6ED] ease-in-out duration-300"
        >
          <Whatsapp />
        </a>

        <div className={`flex ${!isScrollAtTop ? "opacity-100" : "opacity-0"}`}>
          <a
            href="#home"
            className={`${
              isScrollAtTop ? "-mb-[100px]" : "h-[56px]"
            } ease-in-out duration-300 rounded-full flex p-4 text-[#E8E6ED] bg-black-100`}
          >
            <ArrowUp2 />
          </a>
        </div>
      </div>
    </main>
  );
}
