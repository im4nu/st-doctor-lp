import { Verify } from "iconsax-react";
import Image from "next/image";

const HeroServicesData = [
  { id: 0, label: "Sistema + Aplicativo personalizados para a sua demanda" },
  { id: 1, label: "Interfaces intuitivas para clínicas e médicos" },
  { id: 2, label: "Contabilidade especializada no setor da saúde" },
  { id: 3, label: "Soluções financeiras personalizadas com B.I" },
];

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="flex relative flex-col justify-between bg-right-bottom bg-cover bg-no-repeat h-full w-full pl-8 pt-[calc(86px*1.5)]"
      >
        <div className="flex flex-col items-start gap-4 text-black-100">
          <p className="font-semibold">Potencialize sua prática médica</p>
          <h1 className="font-bold text-5xl">Simplificando o seu dia a dia</h1>

          <div className="flex flex-col gap-2 flex-wrap">
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
        </div>

        <div className="flex w-full justify-end">
          <Image
            src={"/images/hero.png"}
            width={640}
            height={524}
            alt="Logomarca com imagens de médicos dentro"
            className="w-[290px] h-[350] lg:w-[524px] lg:h-[640px]]]"
            quality={100}
          />
        </div>
      </section>
      <div
        id="circle-1"
        className="BgCircles top-0 left-0 w-[200px] h-[200px]"
      />
      <div
        id="circle-2"
        className="BgCircles bottom-0 right-0 w-[200px] h-[200px]"
      />
    </>
  );
}
