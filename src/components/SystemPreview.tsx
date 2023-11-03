"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const bgVariants = {
  offscreen: {
    opacity: 0,
    translateX: 300,
  },
  onscreen: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 250);

  return (
    <section id="systemPreview" className="previewSection">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div ref={ref}>
          <motion.div className="card" variants={bgVariants}>
            <img
              src={`/images/systemPreview/desktop${id}.png`}
              alt="Imagem do sistema"
              className="absolute w-screen h-screen object-cover lg:flex hidden animate-bounce"
            />

            <img
              src={`/images/systemPreview/mobile${id}.png`}
              alt="Imagem do sistema"
              className="absolute ml-[5vw] w-[90vw] h-[90vh] object-cover flex lg:hidden animate-bounce"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.h2
        className="absolute left-0 text-white-200 text-2xl lg:text-4xl font-bold"
        style={{ y }}
      >
        <p className="lg:flex flex-row items-center pl-4 lg:pl-8 gap-2 lg:gap-4 hidden">
          <span className="rounded-full flex p-1 bg-white-200 lg:p-2" />
          {id === 1 ? "Dashboard" : ""}
          {id === 2 ? "Agendamento" : ""}
          {id === 3 ? "Recepção" : ""}
          {id === 4 ? "Prontuário" : ""}
          {id === 5 ? "Faturamento" : ""}
        </p>
      </motion.h2>
    </section>
  );
}

export default function App() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
