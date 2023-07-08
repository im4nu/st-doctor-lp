import Navbar from '~/components/Navbar';
import HeroSection from '~/components/Hero';
import Banner from '~/components/Banner';
import ServicesSection from '~/components/Services';
import SystemPreviewSection from '~/components/SystemPreview';
import FeedbackSection from '~/components/Feedback';
import { ArrowUp2 } from 'iconsax-react';
import LGPDBanner from '~/components/LGPD';
import Footer from '~/components/Footer';

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
      <a
        href="#home"
        className="fixed right-4 bottom-4 rounded-full flex p-4 bg-[#E8E6ED]"
      >
        <ArrowUp2 />
      </a>
    </main>
  );
}
