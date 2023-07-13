"use client";

import Image from "next/image";
import { feedbackData } from "./Feedback";

const socialMedia = [
  {
    id: 0,
    name: "Google",
    link: "https://www.google.com/",
    logo: "/icons/google.svg",
  },
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/",
    logo: "/icons/instagram.svg",
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://twitter.com/",
    logo: "/icons/twitter.svg",
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    logo: "/icons/linkedin.svg",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col h-full items-center justify-center w-full px-8 gap-12 my-20 lg:gap-24">
      <div className="flex flex-col w-full gap-12 lg:flex-row  lg:items-start lg:justify-evenly">
        <div className="flex flex-col items-start text-start gap-6 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Siga-nos</h4>

          <p>Conheça mais o StDoctor através das nossas redes sociais</p>

          <div className="flex flex-row gap-3">
            {socialMedia.map((item) => (
              <button
                key={item.id}
                className="flex items-center justify-center p-2 bg-[#E8E6ED] rounded-full hover:bg-white hover:scale-[0.95] ease-in-out duration-300"
              >
                <Image
                  alt={`Botão de acesso ao ${item.name}`}
                  src={item.logo}
                  width={24}
                  height={24}
                  className="min-h-[24px] min-w-[24px]"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
          {feedbackData.map((item) => (
            <a key={item.id} href={item.link}>
              {item.clinic}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
          {feedbackData.map((item) => (
            <a key={item.id} href={item.link}>
              {item.clinic}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
          {feedbackData.map((item) => (
            <a key={item.id} href={item.link}>
              {item.clinic}
            </a>
          ))}
        </div>
      </div>

      <p className="font-bold text-center text-sm">
        Copyright St Doctor © 2023
      </p>
    </footer>
  );
}
