"use client";

import "./style.css";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const cardVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 250);

  return (
    <section className="previewSection">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div ref={ref}>
          <motion.div className="card" variants={cardVariants}>
            <img
              src={`/images/previewCarousel/desktop${id}.png`}
              alt="Imagem do sistema"
              className="absolute w-screen h-screen object-cover lg:flex hidden"
            />

            <img
              src={`/images/previewCarousel/mobile${id}.png`}
              alt="Imagem do sistema"
              className="absolute w-screen h-screen object-cover flex lg:hidden"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.h2
        className="absolute left-0 text-white-100 text-2xl lg:text-4xl font-bold"
        style={{ y }}
      >
        <p className="flex flex-row items-center pl-4 lg:pl-8 gap-2 lg:gap-4">
          <span className="rounded-full flex p-1 bg-primary-100 lg:p-2" />
          {id === 1 ? "Dashboard" : ""}
          {id === 2 ? "Cadastro" : ""}
          {id === 3 ? "Agenda" : ""}
        </p>
      </motion.h2>
    </section>
  );
}

export default function App() {
  return (
    <>
      {[1, 2, 3].map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
