import { Verify } from "iconsax-react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroServicesData = [
  { id: 0, label: "Sistema + Aplicativo personalizados para a sua demanda" },
  { id: 1, label: "Interfaces intuitivas para clínicas e médicos" },
  { id: 2, label: "Contabilidade especializada no setor da saúde" },
  { id: 3, label: "Soluções financeiras personalizadas com B.I" },
];

const heroStatistic = [
  {
    id: 0,
    value: "330K",
    label: "Atendimentos",
  },
  {
    id: 1,
    value: "135K",
    label: "Pacientes",
  },
  {
    id: 2,
    value: "60",
    label: "Clínicas",
  },
];

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full"
    >
      <section
        id="home"
        className="flex flex-col justify-between min-h-[85vh] h-full w-full pl-8 pt-[calc(86px*1.5)] md:p-0 md:flex-row md:items-center md:min-h-[95vh]"
      >
        <div className="flex flex-col items-start gap-4 text-black-100 md:w-1/2 md:px-[10%] md:gap-8">
          <p className="font-semibold">Potencialize sua prática médica</p>
          <h1 className="font-bold text-5xl md:text-6xl">
            Simplificando o seu dia a dia
          </h1>

          <div className="flex flex-col gap-2 flex-wrap md:gap-4">
            {HeroServicesData.map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-start items-center w-full gap-2"
              >
                <Verify
                  variant="TwoTone"
                  size={24}
                  className="flex text-primary-200 min-w-[24px] min-h-[24px]"
                />
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="md:flex flex-row items-center gap-5 md:mt-12 hidden">
            {heroStatistic.map((item) => (
              <div className="flex flex-col items-center gap-3" key={item.id}>
                <p className="text-4xl font-bold">
                  {item.value}
                  <span className="text-primary-200">+</span>
                </p>
                <h3>{item.label}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-end md:w-1/2">
          <Image
            src={"/images/hero.png"}
            width={640}
            height={524}
            alt="Logomarca com imagens de médicos dentro"
            className="w-[290px] h-[350] md:w-[524px] md:h-[640px]]]"
            quality={100}
          />
        </div>
      </section>

      <div
        id="circle-1"
        className="BgCircles top-6 left-6 md:-top-36 md:-left-36 w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
      />
      <div
        id="circle-2"
        className="BgCircles bottom-6 right-6 md:bottom-36 md:right-24 w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
      />
    </motion.div>
  );
}
