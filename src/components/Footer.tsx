"use client";

import Image from "next/image";
import { feedbackData } from "./Feedback";
import GoogleIcon from "/icons/google.svg";

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
            <a
              href="#"
              className="flex items-center justify-center p-2 bg-[#E8E6ED] rounded-full hover:bg-primary-200 fill-black-100 hover:fill-white ease-in-out duration-300"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                xmlns="http://www.w3.org/2000/svg"
                className="min-h-[18px] min-w-[18px]"
              >
                <path d="M15.958 8.521C15.958 12.9585 12.9268 16.0835 8.45801 16.0835C4.14551 16.0835 0.708008 12.646 0.708008 8.3335C0.708008 4.05225 4.14551 0.583496 8.45801 0.583496C10.5205 0.583496 12.3018 1.36475 13.6455 2.61475L11.5205 4.646C8.77051 1.98975 3.64551 3.98975 3.64551 8.3335C3.64551 11.0522 5.80176 13.2397 8.45801 13.2397C11.5205 13.2397 12.6768 11.0522 12.833 9.896H8.45801V7.23975H15.833C15.8955 7.646 15.958 8.021 15.958 8.521Z" />
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-center p-2 bg-[#E8E6ED] rounded-full hover:bg-primary-200 fill-black-100 hover:fill-white ease-in-out duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="min-h-[18px] min-w-[18px]"
              >
                <path d="M7.3335 3.73975C9.30225 3.73975 10.9272 5.36475 10.9272 7.3335C10.9272 9.3335 9.30225 10.9272 7.3335 10.9272C5.3335 10.9272 3.73975 9.3335 3.73975 7.3335C3.73975 5.36475 5.3335 3.73975 7.3335 3.73975ZM7.3335 9.67725C8.61475 9.67725 9.646 8.646 9.646 7.3335C9.646 6.05225 8.61475 5.021 7.3335 5.021C6.021 5.021 4.98975 6.05225 4.98975 7.3335C4.98975 8.646 6.05225 9.67725 7.3335 9.67725ZM11.896 3.61475C11.896 4.0835 11.521 4.4585 11.0522 4.4585C10.5835 4.4585 10.2085 4.0835 10.2085 3.61475C10.2085 3.146 10.5835 2.771 11.0522 2.771C11.521 2.771 11.896 3.146 11.896 3.61475ZM14.271 4.4585C14.3335 5.61475 14.3335 9.0835 14.271 10.2397C14.2085 11.3647 13.9585 12.3335 13.146 13.1772C12.3335 13.9897 11.3335 14.2397 10.2085 14.3022C9.05225 14.3647 5.5835 14.3647 4.42725 14.3022C3.30225 14.2397 2.3335 13.9897 1.48975 13.1772C0.677246 12.3335 0.427246 11.3647 0.364746 10.2397C0.302246 9.0835 0.302246 5.61475 0.364746 4.4585C0.427246 3.3335 0.677246 2.3335 1.48975 1.521C2.3335 0.708496 3.30225 0.458496 4.42725 0.395996C5.5835 0.333496 9.05225 0.333496 10.2085 0.395996C11.3335 0.458496 12.3335 0.708496 13.146 1.521C13.9585 2.3335 14.2085 3.3335 14.271 4.4585ZM12.771 11.4585C13.146 10.5522 13.0522 8.36475 13.0522 7.3335C13.0522 6.3335 13.146 4.146 12.771 3.2085C12.521 2.61475 12.0522 2.11475 11.4585 1.896C10.521 1.521 8.3335 1.61475 7.3335 1.61475C6.30225 1.61475 4.11475 1.521 3.2085 1.896C2.5835 2.146 2.11475 2.61475 1.86475 3.2085C1.48975 4.146 1.5835 6.3335 1.5835 7.3335C1.5835 8.36475 1.48975 10.5522 1.86475 11.4585C2.11475 12.0835 2.5835 12.5522 3.2085 12.8022C4.11475 13.1772 6.30225 13.0835 7.3335 13.0835C8.3335 13.0835 10.521 13.1772 11.4585 12.8022C12.0522 12.5522 12.5522 12.0835 12.771 11.4585Z" />
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-center p-2 bg-[#E8E6ED] rounded-full hover:bg-primary-200 fill-black-100 hover:fill-white ease-in-out duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="min-h-[18px] min-w-[18px]"
              >
                <path d="M13.3335 0.333496C13.8647 0.333496 14.3335 0.802246 14.3335 1.36475V13.3335C14.3335 13.896 13.8647 14.3335 13.3335 14.3335H1.30225C0.770996 14.3335 0.333496 13.896 0.333496 13.3335V1.36475C0.333496 0.802246 0.770996 0.333496 1.30225 0.333496H13.3335ZM4.55225 12.3335V5.67725H2.48975V12.3335H4.55225ZM3.521 4.73975C4.17725 4.73975 4.7085 4.2085 4.7085 3.55225C4.7085 2.896 4.17725 2.3335 3.521 2.3335C2.8335 2.3335 2.30225 2.896 2.30225 3.55225C2.30225 4.2085 2.8335 4.73975 3.521 4.73975ZM12.3335 12.3335V8.67725C12.3335 6.896 11.9272 5.48975 9.8335 5.48975C8.8335 5.48975 8.146 6.05225 7.86475 6.5835H7.8335V5.67725H5.86475V12.3335H7.92725V9.05225C7.92725 8.17725 8.0835 7.3335 9.17725 7.3335C10.2397 7.3335 10.2397 8.3335 10.2397 9.0835V12.3335H12.3335Z" />
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-center p-2 bg-[#E8E6ED] rounded-full hover:bg-primary-200 fill-black-100 hover:fill-white ease-in-out duration-300"
            >
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
                className="min-h-[18px] min-w-[18px]"
              >
                <path d="M14.6772 4.0835C14.6772 4.23975 14.6772 4.36475 14.6772 4.521C14.6772 8.86475 11.396 13.8335 5.36475 13.8335C3.48975 13.8335 1.771 13.3022 0.333496 12.3647C0.583496 12.396 0.833496 12.4272 1.11475 12.4272C2.646 12.4272 4.05225 11.896 5.17725 11.021C3.73975 10.9897 2.521 10.0522 2.11475 8.73975C2.3335 8.771 2.521 8.80225 2.73975 8.80225C3.021 8.80225 3.3335 8.73975 3.5835 8.67725C2.0835 8.36475 0.958496 7.05225 0.958496 5.4585V5.42725C1.396 5.67725 1.92725 5.80225 2.4585 5.8335C1.55225 5.23975 0.989746 4.23975 0.989746 3.11475C0.989746 2.48975 1.146 1.92725 1.42725 1.4585C3.05225 3.42725 5.48975 4.73975 8.2085 4.896C8.146 4.646 8.11475 4.396 8.11475 4.146C8.11475 2.3335 9.5835 0.864746 11.396 0.864746C12.3335 0.864746 13.1772 1.23975 13.8022 1.896C14.521 1.73975 15.2397 1.4585 15.8647 1.0835C15.6147 1.86475 15.1147 2.48975 14.4272 2.896C15.0835 2.8335 15.7397 2.646 16.3022 2.396C15.8647 3.05225 15.3022 3.61475 14.6772 4.0835Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
          {feedbackData.map((item) => (
            <a
              className="hover:text-primary-200 hover:cursor-pointer ease-in-out duration-300"
              key={item.id}
              href={item.link}
            >
              {item.clinic}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
          {feedbackData.map((item) => (
            <a
              className="hover:text-primary-200 hover:cursor-pointer ease-in-out duration-300"
              key={item.id}
              href={item.link}
            >
              {item.clinic}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
          {feedbackData.map((item) => (
            <a
              className="hover:text-primary-200 hover:cursor-pointer ease-in-out duration-300"
              key={item.id}
              href={item.link}
            >
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
