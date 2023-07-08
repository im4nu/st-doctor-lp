import {
  DocumentText1,
  Mobile,
  MonitorMobbile,
  ReceiptItem,
} from 'iconsax-react';
import Image from 'next/image';

const Logos = [
  { id: 0, url: '/images/partnerLogo/logo1.png', w: 250, h: 46 },
  { id: 0, url: '/images/partnerLogo/logo1.png', w: 250, h: 46 },
  { id: 1, url: '/images/partnerLogo/logo2.png', w: 100, h: 50 },
  { id: 2, url: '/images/partnerLogo/logo3.png', w: 145, h: 30 },
  { id: 3, url: '/images/partnerLogo/logo4.png', w: 120, h: 50 },
  { id: 4, url: '/images/partnerLogo/logo5.png', w: 180, h: 45 },
];

const ServicesData = [
  {
    id: 0,
    icon: <Mobile variant="TwoTone" size={32} />,
    title: 'Prescrição Digital',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.',
  },
  {
    id: 1,
    icon: <ReceiptItem variant="TwoTone" size={32} />,
    title: 'Emissão de Nota Fiscal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.',
  },
  {
    id: 2,
    icon: <DocumentText1 variant="TwoTone" size={32} />,
    title: 'Formulários Dinâmicos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.',
  },
  {
    id: 3,
    icon: <MonitorMobbile variant="TwoTone" size={32} />,
    title: 'Aplicativo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="flex flex-col min-h-screen h-full gap-8">
      <div className="flex slider">
        <div className="flex flex-row gap-12 items-center justify-center my-12 slide-track">
          {Logos.map((item) => (
            <Image
              key={item.id}
              src={item.url}
              alt={`Logomarca ${item}`}
              width={item.w}
              height={item.h}
              className={`flex min-w-${item.w} min-h-${item.h} slide`}
            />
          ))}
        </div>
      </div>

      <div className="flex text-center items-center justify-center w-full">
        <h2 className="text-5xl font-bold text-black-100">
          Por que o <span> </span>
          <span className="text-5xl font-bold StDoctorSpan">St Doctor?</span>
        </h2>
      </div>

      <p className="text-center px-8">
        Cuidamos da sua clínica com excelência para que seu foco seja voltado
        para o que mais importa, a saúde dos seus pacientes.
      </p>

      <div className="flex flex-col gap-12 pl-8">
        {ServicesData.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="flex bg-gradient-to-tr from-primary-100 to-primary-200 text-white-200 w-[70px] h-[70px] items-center justify-center rounded-lg">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full">
        <Image
          src={'/images/servicesHero.png'}
          alt="Mulher de jaleco com estetoscópio"
          width={360}
          height={540}
          className="lg:w-[487px] w-full lg:h-[600px] DropShadow"
        />
      </div>
    </section>
  );
}
