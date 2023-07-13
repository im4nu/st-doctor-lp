import Navbar from "~/components/Navbar";
import HeroSection from "~/components/Hero";
import Banner from "~/components/Banner";
import ServicesSection from "~/components/Services";
import SystemPreviewSection from "~/components/SystemPreview";
import FeedbackSection from "~/components/Feedback";
import { ArrowUp2, Whatsapp } from "iconsax-react";
import LGPDBanner from "~/components/LGPD";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <main className="flex h-full w-screen flex-col items-center justify-between bg-white-200 font-medium text-black-100">
      <Navbar />
      <HeroSection />
      <LGPDBanner />
      <ServicesSection />
      <SystemPreviewSection />
      <FeedbackSection />
      <Banner />
      <Footer />
      <div className="flex flex-col items-center gap-3 right-4 bottom-4 fixed">
        <a
          href="#home"
          className="flex rounded-full pulse p-4 bg-green-700 text-[#E8E6ED]"
        >
          <Whatsapp />
        </a>

        <a
          href="#home"
          className="rounded-full flex p-4 text-[#E8E6ED] bg-black-100"
        >
          <ArrowUp2 />
        </a>
      </div>
    </main>
  );
}
