"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col h-full items-center justify-center w-full px-8 gap-12 my-20 lg:gap-24">
      <div className="flex flex-col w-full gap-12 lg:flex-row  lg:items-start lg:justify-evenly">
        <div className="flex flex-col items-start text-start gap-6 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Siga-nos</h4>

          <p>Conheça mais o StDoctor através das nossas redes sociais</p>

          <div className="flex flex-row gap-3">
            <a
              href="https://instagram.com/stdoctor_?igshid=NjIwNzIyMDk2Mg=="
              className="flex items-center justify-center p-2 bg-[#E8E6ED] rounded-full h-[46px] w-[46px] hover:bg-primary-200 fill-black-100 hover:fill-white ease-in-out duration-300"
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
              href={`http://wa.me/558197515199?text=${encodeURIComponent(
                `Olá! Venho do site do StDoctor e gostaria de fazer um orçamento e entender melhor esse produto!`
              )}`}
              className="flex items-center stroke-primary-100 justify-center p-2 bg-[#E8E6ED] rounded-full h-[46px] w-[46px] hover:bg-primary-200 hover:stroke-white ease-in-out duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.9 20.6c1.5.9 3.3 1.4 5.1 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5l-.86 3.306a1 1 0 0 0 1.243 1.213L6.9 20.6Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.5 14.848c0 .162-.036.329-.113.491a1.856 1.856 0 0 1-.306.459c-.221.243-.464.418-.74.531-.27.113-.563.171-.878.171-.46 0-.951-.108-1.47-.328a7.922 7.922 0 0 1-1.55-.892 12.95 12.95 0 0 1-1.478-1.26 12.79 12.79 0 0 1-1.257-1.471 8.02 8.02 0 0 1-.884-1.534C7.608 10.5 7.5 10.01 7.5 9.543c0-.306.054-.598.162-.868.108-.275.28-.527.519-.752.288-.284.603-.423.937-.423.126 0 .252.027.365.081.117.054.22.135.302.252l1.046 1.472c.08.112.14.216.18.315.04.094.063.189.063.274a.61.61 0 0 1-.095.32 1.53 1.53 0 0 1-.252.319l-.343.356a.24.24 0 0 0-.072.18c0 .035.005.067.014.103.013.036.027.063.036.09.08.149.22.342.419.576.203.234.419.473.653.711.244.239.478.459.717.662.234.197.428.332.581.413l.082.037a.311.311 0 0 0 .112.018.248.248 0 0 0 .185-.077l.342-.338c.113-.112.221-.197.325-.252a.6.6 0 0 1 .32-.094.72.72 0 0 1 .275.059c.099.04.203.098.315.175l1.492 1.058a.683.683 0 0 1 .248.287.921.921 0 0 1 .072.351Z"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
          {feedbackData.map((item) => (
            <a
              className="hover:text-primary-200 hover:cursor-pointer ease-in-out duration-300"
              key={item.id}
              href={"#feedback"}
            >
              {item.clinic}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start text-start gap-3 w-full lg:w-1/6">
          <h4 className="font-bold text-lg">Profissionais em Destaque</h4>
          {feedbackData.map((item) => (
            <a
              className="hover:text-primary-200 hover:cursor-pointer ease-in-out duration-300"
              key={item.id}
              href={"#feedback"}
            >
              {item.doctor}
            </a>
          ))}
        </div> */}

        <div className="flex flex-col items-center lg:items-start text-start gap-3 w-full lg:w-1/6">
          <a href="https://www.starttec.com.br/">
            <Image
              src={"/images/startTec-logo.png"}
              width={150}
              height={50}
              alt="Start Tec"
            />
          </a>
        </div>
      </div>

      <p className="font-bold text-center text-sm">
        Copyright St Doctor © 2023 - Design por:{" "}
        <a className="underline" href="https://www.omanu.tech/">
          Emmanuel Rodrigues
        </a>
      </p>
    </footer>
  );
}
