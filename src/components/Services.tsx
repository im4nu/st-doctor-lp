"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ServicesData } from "~/utils/serviceData";

const data = ServicesData.slice(0, 4);

export default function ServicesSection() {
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
      className="flex flex-col min-h-screen w-full items-center gap-8 lg:gap-12"
    >
      <h2 className="text-5xl px-8 max-w-md text-center font-bold text-black-100 lg:px-0 md:max-w-none">
        Por que o <span> </span>
        <span className="text-5xl font-bold StDoctorSpan">St Doctor?</span>
      </h2>

      <div className="flex flex-col lg:items-center lg:flex-row-reverse lg:justify-evenly 2xl:justify-center">
        <div className="flex flex-col gap-8 text-center px-8 max-w-md md:max-w-none md:items-center md:w-full lg:text-start lg:w-1/2 2xl:w-1/3">
          <h2 className="hidden lg:flex text-4xl font-bold text-black-100 w-full">
            Nossos <span> </span>
            <span className="text-4xl px-2 font-bold StDoctorSpan">
              Serviços
            </span>
          </h2>

          <p>
            Cuidamos da sua clínica com excelência para que seu foco seja
            voltado para o que mais importa, a saúde dos seus pacientes.
          </p>

          <div className="flex flex-col gap-12 pl-8 lg:flex-row lg:flex-wrap lg:p-0 lg:gap-0">
            {data.map((item) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                key={item.id}
                className="flex flex-col gap-2 w-full items-start lg:w-1/2 lg:p-6 lg:gap-4"
                ref={scrollRef}
              >
                <motion.div className="card" variants={cardVariants}>
                  <div className="flex bg-gradient-to-tr from-primary-100 to-primary-200 text-white-200 w-[60px] h-[60px] items-center justify-center rounded-lg">
                    {item.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-sm text-start">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex w-full flex-row justify-end gap-3">
            <Link
              href={"/services"}
              className="underline text-primary-100 text-sm hover:translate-x-2 ease-linear duration-300"
            >
              Ver todos os serviços
            </Link>
            <ArrowRight size={24} />
          </div>
        </div>

        <div className="flex w-screen lg:w-1/3">
          <Image
            src={"/images/servicesHero.png"}
            alt="Mulher de jaleco com estetoscópio"
            width={360}
            height={540}
            className="lg:w-[487px] w-full lg:h-fit DropShadow"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
