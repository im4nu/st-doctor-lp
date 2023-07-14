"use client";

import { motion } from "framer-motion";
import {
  DocumentText1,
  Mobile,
  MonitorMobbile,
  ReceiptItem,
} from "iconsax-react";
import Image from "next/image";
import { useRef } from "react";

const ServicesData = [
  {
    id: 0,
    icon: <Mobile variant="TwoTone" size={32} />,
    title: "Prescrição Digital",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
  },
  {
    id: 1,
    icon: <ReceiptItem variant="TwoTone" size={32} />,
    title: "Emissão de Nota Fiscal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
  },
  {
    id: 2,
    icon: <DocumentText1 variant="TwoTone" size={32} />,
    title: "Formulários Dinâmicos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
  },
  {
    id: 3,
    icon: <MonitorMobbile variant="TwoTone" size={32} />,
    title: "Aplicativo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef(null);
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
          <h2 className="hidden lg:flex text-4xl font-bold text-black-100">
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
            {ServicesData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 w-full items-start lg:w-1/2 lg:p-6"
                ref={scrollRef}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex bg-gradient-to-tr from-primary-100 to-primary-200 text-white-200 w-[70px] h-[70px] items-center justify-center rounded-lg">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-start">{item.description}</p>
                </motion.div>
              </div>
            ))}
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
