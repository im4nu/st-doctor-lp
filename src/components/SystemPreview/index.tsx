"use client";

// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./style.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
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
  const y = useParallax(scrollYProgress, 300);

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
              src={`/images/previewCarousel/${id}.jpeg`}
              alt="A London skyscraper"
              className="previewImg card"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.h2 className="previewH2" style={{ y }}>{`#00${id}`}</motion.h2>
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
