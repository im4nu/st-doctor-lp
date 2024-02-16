import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

export default function Banner() {
  const [modalVisibility, setModalVisibility] = useState(false);
  // function toggleModal() {
  //   setModalVisibility((current) => !current);
  // }
  return (
    <>
      <section
        id="banner"
        className="flex flex-col bg-white rounded-xl items-center text-center gap-6 py-20 max-w-xl px-6 lg:max-w-none lg:w-[80%] mb-12 lg:my-20"
      >
        <div className="flex flex-col font-semibold gap-3">
          <p>Tá esperando o que?</p>

          <h2 className="text-4xl font-bold">Faça agora mesmo um</h2>

          <span className="text-4xl StDoctorSpan font-bold">
            teste do St Doctor
          </span>

          <p className="text-sm text-red-800">
            Experiência por tempo limitado!
          </p>
        </div>

        <p className="px-8">
          Não perca essa oportunidade única. Teste o sistema agora gratuitamente
          e desfrute de todas as funcionalidades que o St Doctor tem a oferecer.
        </p>

        <a
          // onClick={}
          href={`http://wa.me/558197515199?text=${encodeURIComponent(
            `Olá! Venho do site do StDoctor e gostaria de realizar um teste gratuito da plataforma!`
          )}`}
          target="_blank"
          className="flex items-center rounded-3xl w-fit px-12 justify-center GradientButton py-3 text-white-200 hover:scale-95 hover:cursor-pointer ease-in-out duration-300"
        >
          Quero testar gratuitamente
        </a>

        <div className="flex w-full items-start px-2">
          <Image
            src={"/images/logo.png"}
            width={70}
            height={70}
            alt="Logomarca St Doctor"
            className="lg:h-full lg:w-[111px]]"
          />
        </div>
      </section>

      {/* <Modal modalVisibility={modalVisibility} toggle={toggleModal}>
        <h2 className="text-xl">Qual o seu dispositivo?</h2>
        <p className="text-sm text-center">
          Escolha dentre os dispositivos qual você está acessando agora e vai
          realizar o teste
        </p>
        <Image
          src={"/icons/devices.svg"}
          alt="Ilustrações de vários dispositivos"
          width={300}
          height={300}
        />
        <div className="flex flex-col items-center justify-center lg:hidden gap-6">
          <a
            href="https://apps.apple.com/br/app/stdoctor/id1463715996"
            className="flex items-center rounded-3xl w-fit px-12 justify-center GradientButton py-3 text-white-200 hover:scale-95 hover:cursor-pointer ease-in-out duration-300 text-center"
          >
            IOS
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.stdoctormedicos&hl=pt_BR&gl=US"
            className="flex items-center rounded-3xl w-fit px-12 justify-center GradientButton py-3 text-white-200 hover:scale-95 hover:cursor-pointer ease-in-out duration-300 text-center"
          >
            Android
          </a>
        </div>

        <a
          href="https://sys.stdoctor.com.br/"
          className="hidden lg:flex items-center rounded-3xl w-fit px-12 justify-center GradientButton py-3 text-white-200 hover:scale-95 hover:cursor-pointer ease-in-out duration-300 text-center"
        >
          Notebook ou Desktop
        </a>
      </Modal> */}
    </>
  );
}
