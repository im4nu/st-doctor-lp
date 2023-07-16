"use client";

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContainedLink } from "./Link";

export const feedbackData = [
  {
    id: 0,
    doctor: "James Web",
    clinic: "Clínica de Ortopedia",
    link: "https://www.stdoctor.com.br",
    atuationArea: "Clínica de ortopedia",
    image: "/images/feedback/1.png",
    feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas...`,
  },
  {
    id: 1,
    doctor: "Manu Rodrigues",
    clinic: "Clínica de Olhos do Cariri",
    link: "https://www.stdoctor.com.br",
    atuationArea: "Clínica de oftalmologia",
    image: "/images/feedback/1.png",
    feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas...`,
  },
  {
    id: 2,
    doctor: "Rian Landim",
    clinic: "Clínirin",
    link: "https://www.stdoctor.com.br",
    atuationArea: "Clínica de Rins",
    image: "/images/feedback/1.png",
    feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas...`,
  },
  {
    id: 3,
    doctor: "Niko Robin",
    clinic: "Laboratório Costa",
    link: "https://www.stdoctor.com.br",
    atuationArea: "Laboratório de Análises Clínicas",
    image: "/images/feedback/1.png",
    feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas...`,
  },
  {
    id: 4,
    doctor: "Petter Pan",
    clinic: "C.O.P Centro de ortopedia",
    link: "https://www.stdoctor.com.br",
    atuationArea: "Clínica de ortopedia",
    image: "/images/feedback/1.png",
    feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas...`,
  },
];

export default function FeedbackSection() {
  const [step, setStep] = useState(0);

  function HandleNextCard() {
    setStep((step) => {
      if (step === feedbackData.length - 1) {
        return 0;
      } else {
        return step + 1;
      }
    });
  }

  function HandlePreviousCard() {
    setStep((step) => {
      if (step != 0) {
        return step - 1;
      } else {
        return feedbackData.length - 1;
      }
    });
  }

  const feedbackDataPosition = feedbackData[step];

  return (
    <section
      id="feedback"
      className="flex flex-col h-full gap-12 py-24 items-center justify-center lg:flex-row lg:gap-28"
    >
      <div className="flex flex-col lg:w-1/2 items-center justify-center gap-12">
        <div className="flex text-start flex-col justify-center gap-5 px-8 max-w-lg">
          <p className="font-semibold">Qualidade Garantida</p>
          <h2 className="text-5xl font-bold StDoctorSpan">
            Confira alguns depoimentos
          </h2>
          <p>
            Alguns dos nossos clientes estão aqui pra contar a experiência deles
            com o nosso sistema{" "}
          </p>
        </div>

        <a
          href="#"
          className="flex flex-col w-[90%] gap-5 h-[215px] rounded-xl bg-feedback-1 bg-cover bg-no-repeat items-start justify-center pl-8 text-white-200 DropShadow"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p>{feedbackDataPosition.atuationArea}</p>
              <h3 className="text-4xl font-semibold w-3/4">
                {feedbackDataPosition.clinic}
              </h3>
            </motion.div>
          </AnimatePresence>
          <p>Saber mais</p>
        </a>

        {/* <ContainedLink
          link={feedbackDataPosition.link}
          title="Ver todos depoimentos"
        /> */}
      </div>

      <div className="flex flex-col lg:w-1/2 items-center justify-center gap-12">
        <div className="flex flex-col w-[90%] h-[350px] items-center justify-center bg-gradient-to-br from-primary-300 to-primary-100 text-white-200 rounded-lg mx-3 max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-row -m-3 items-center w-full">
                <Image
                  src={"/images/feedbackProfissional1.png"}
                  alt="Imagem do comentarista"
                  width={175}
                  height={175}
                  className="w-[175px] h-full lg:w-[227px] lg:h-[227px] rounded-full"
                />

                <h3 className="text-5xl text-end">
                  {feedbackDataPosition.doctor}
                </h3>
              </div>

              <p className="text-center text-sm p-8">
                {feedbackDataPosition.feedback}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-row w-3/4 max-w-sm items-center justify-evenly">
          <button
            onClick={HandlePreviousCard}
            className="flex min-h-[18px] min-w-[18px] rounded-full p-3 GradientButton"
          >
            <ArrowLeft2 size={18} color="#fff" />
          </button>

          {feedbackData.map((item, index) => (
            <div
              key={item.id}
              className={`${
                step === index ? "bg-primary-100" : ""
              } flex rounded-full p-1 border border-primary-100 ease-linear duration-500`}
            />
          ))}

          <button
            onClick={HandleNextCard}
            className="flex min-h-[18px] min-w-[18px] rounded-full p-3 GradientButton"
          >
            <ArrowRight2 size={18} color="#fff" />
          </button>
        </div>
      </div>
    </section>
  );
}
