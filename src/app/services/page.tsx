"use client";

import { ServicesData } from "~/utils/serviceData";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";

export default function AllServices() {
  const scrollRef = useRef(null);
  const cardVariants = {
    offscreen: {
      x: "50vw",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.6,
      },
    },
  };
  return (
    <section
      id="services"
      className="flex relative flex-col min-h-screen w-full items-center gap-8 lg:gap-12 justify-center text-black-100"
    >
      <div className="flex absolute w-full items-start left-8 top-8">
        <Link
          href={"/"}
          className="flex bg-primary-100 p-4 rounded-full hover:cursor-pointer"
        >
          <ArrowLeft2 size={24} color="#fff" />
        </Link>
      </div>

      <div className="flex flex-col w-1/3 text-center gap-6">
        <h2 className="text-5xl px-8 max-w-md text-center font-bold text-black-100 lg:px-0 md:max-w-none mt-28">
          Nossos <span> </span>
          <span className="text-5xl font-bold StDoctorSpan">
            Principais Serviços
          </span>
        </h2>
        <p>
          Confira nossos principais serviços e descubra tudo que temos a te
          oferecer! Conte sempre conosco quando o assunto for qualidade e
          segurança. Se tiver dúvidas entre em contato pelo whatsapp!
        </p>
      </div>

      <div className="flex flex-col gap-12 pl-8 lg:flex-row lg:flex-wrap lg:p-0 lg:gap-0 w-1/2">
        {ServicesData.map((item) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            key={item.id}
            className="flex flex-col gap-2 w-full items-center lg:w-1/3 lg:p-6 lg:gap-4"
            ref={scrollRef}
          >
            <motion.div className="card" variants={cardVariants}>
              <div className="flex bg-gradient-to-tr from-primary-100 to-primary-200 text-white-200 w-[60px] h-[60px] items-center justify-center rounded-lg">
                {item.icon}
              </div>
            </motion.div>

            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-sm text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div
        id="circle-1"
        className="BgCircles -z-20 top-6 left-6 md:-top-36 md:-left-36 w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
      />
      <div
        id="circle-2"
        className="BgCircles -z-20 bottom-6 right-6 md:bottom-36 md:right-24 w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
      />
    </section>
  );
}
