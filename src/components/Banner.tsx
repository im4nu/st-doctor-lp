import Image from 'next/image';
import { ContainedLink } from './Link';

export default function Banner() {
  return (
    <section className="flex flex-col bg-white rounded-xl items-center text-center gap-6 py-20">
      <div className="flex flex-col font-semibold gap-3">
        <p>Tá esperando o que?</p>
        <h2 className="text-4xl font-bold">Faça agora mesmo um</h2>
        <span className="text-4xl StDoctorSpan font-bold">
          teste do St Doctor
        </span>
        <p className="text-sm text-red-800">Experiência por tempo limitado!</p>
      </div>
      <p className="px-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi
        tristique libero urna sem vitae. Viverra facilisis rhoncus et, nibh
        nullam vitae laoreet.{' '}
      </p>
      <ContainedLink title="Quero testar gratuitamente" />

      <div className="flex w-full items-start px-2">
        <Image
          src={'/images/logo.png'}
          width={70}
          height={70}
          alt="Logomarca St Doctor"
          className="lg:h-[111px] lg:w-[111px]]"
        />
      </div>
    </section>
  );
}
