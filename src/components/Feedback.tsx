"use client";

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const feedbackData = [
  {
    id: 0,
    doctor: "Dr. Pedro Rodrigues",
    clinic: null,
    link: "#",
    atuationArea: "Cardiologista",
    image: "/images/feedbackCarousel/dr-pedro-rodrigues.png",
    feedback: `Há pouco mais de 5 anos trabalhamos com o StDoctor, e a evolução tem sido constante, com atualizações e facilidades no sistema, o que nos proporciona agilidade nos atendimentos e credibilidade. Além disso, recebemos auxílio fora do consultório, agora com o aplicativo gratuito. Mas o principal para mim é a assistência, que é impecável. Essas alterações corrigem alguns erros de pontuação e de concordância, tornando o comentário mais claro e fluente.`,
  },
  {
    id: 1,
    doctor: "Dra. Luciana Rocha",
    clinic: null,
    link: "#",
    atuationArea: "Dermatologia",
    image: "/images/feedbackCarousel/dra-luciana.png",
    feedback: `O StDoctor é um sistema completo e fácil de operar. A assistência técnica é perfeita e a recente gestão financeira é uma ótima adição. Com atualizações frequentes, temos agilidade nos atendimentos e mais credibilidade. O aplicativo gratuito também auxilia fora do consultório. Sem dúvida, o StDoctor é essencial para aprimorar nossas práticas na área da saúde e oferecer um serviço de excelência aos pacientes.`,
  },
  {
    id: 2,
    doctor: "Mônica Pereira",
    clinic: "Interne Prime",
    link: "#",
    atuationArea: "Interne Prime",
    image: "/images/feedbackCarousel/interne-prime.png",
    feedback: `Gostaria de parabenizar a todos que fazem parte da equipe StDoctor, pelo atendimento de excelência em todas as etapas do nosso processo. Com plataforma flexível e adequada a cada cliente conseguem demonstrar exclusividade em cada atendimento e olhar diferenciado para necessidade do que o cliente entende como valor.`,
  },
  {
    id: 3,
    doctor: "Dr. Rilcon Coelho",
    clinic: null,
    link: "#",
    atuationArea: "Oftalmologista",
    image: "/images/feedbackCarousel/dr-rilcon-coelho.png",
    feedback: `É com grande satisfação que expresso minha admiração pelo excepcional programa de prontuário eletrônico STDoctor. Como oftalmologista, reconheço a importância de ferramentas eficientes na gestão de informações médicas e no atendimento aos pacientes. O STDoctor não apenas simplifica o registro de dados clínicos, mas também proporciona uma interface amigável e intuitiva, otimizando o fluxo de trabalho no consultório. Sua abordagem abrangente e recursos personalizáveis demonstram um compromisso genuíno com a excelência na assistência médica. Parabenizo a equipe por criar um sistema tão notável e benéfico para a comunidade médica.`,
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
      className="flex flex-col max-w-7xl h-full gap-12 py-24 w-full items-center justify-center lg:flex-row lg:gap-28"
    >
      <div className="flex flex-col lg:w-1/2 items-center justify-center gap-12">
        <div className="flex text-start flex-col justify-center gap-5 px-8 max-w-lg">
          <p className="font-semibold">Qualidade Garantida</p>
          <h2 className="text-5xl font-bold StDoctorSpan">
            Confira alguns depoimentos
          </h2>
          <p className="z-20">
            Alguns dos nossos clientes estão aqui pra contar a experiência deles
            com o nosso sistema{" "}
          </p>
        </div>

        <a
          href="#"
          className="lg:flex hidden flex-col w-[90%] max-w-md gap-5 h-[215px] rounded-xl bg-feedback-1 bg-cover bg-no-repeat items-start justify-center pl-8 text-white-200 DropShadow"
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
              <h3 className="flex text-4xl font-semibold w-3/4 z-10">
                {feedbackDataPosition.clinic ?? feedbackDataPosition.doctor}
              </h3>
            </motion.div>
          </AnimatePresence>
          <p>Saber mais</p>
        </a>
      </div>

      <div className="flex flex-col lg:w-1/2 items-center justify-center gap-12">
        <div className="flex flex-col w-[80%] lg:min-h-[400px] lg:h-fit items-start justify-start bg-gradient-to-bl from-primary-300 to-primary-100 text-white-200 rounded-lg mx-3 max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between w-full">
                <div className="flex items-center w-fit h-fit px-2 py-4 rounded-full bg-white-200 lg:-mr-8 lg:-mt-8 -mt-12">
                  <Image
                    src={feedbackDataPosition.image}
                    alt="Responsável pelo comentário"
                    width={190}
                    height={190}
                    quality={100}
                    className="flex min-w-[190px] h-[190px] rounded-full object-cover lg:-mr-2 lg:-mt-8"
                  />
                </div>

                <h3 className="text-4xl lg:text-5xl text-center lg:text-start lg:p-8 px-5 py-4">
                  {feedbackDataPosition.doctor}
                </h3>
              </div>

              <p className="text-center font-bold text-xs lg:text-sm lg:p-8 px-5 py-4">
                {feedbackDataPosition.feedback}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-row w-3/5 max-w-sm items-center justify-evenly">
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
                step === index ? "bg-primary-100" : "bg-white-300"
              } flex h-[2px] lg:h-[3px] w-3 rounded ease-linear duration-500`}
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
