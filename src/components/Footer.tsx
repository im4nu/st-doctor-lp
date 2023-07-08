'use client';

import Image from 'next/image';
import { feedbackData } from './Feedback';

const socialMedia = [
  {
    id: 0,
    name: 'Google',
    link: 'https://www.google.com/',
    logo: '/icons/google.svg',
  },
  {
    id: 1,
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    logo: '/icons/instagram.svg',
  },
  {
    id: 2,
    name: 'Twitter',
    link: 'https://twitter.com/',
    logo: '/icons/twitter.svg',
  },
  {
    id: 3,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    logo: '/icons/linkedin.svg',
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col h-full items-center justify-center w-full border-t px-8 py-24 gap-12">
      <div className="flex flex-col items-start text-start gap-3 w-full">
        <h4 className="font-bold text-lg">Siga-nos</h4>
        <p>Conheça mais o StDoctor através das nossas redes sociais</p>
        <div className="flex flex-row gap-3">
          {socialMedia.map((item) => (
            <button
              key={item.id}
              className="flex items-center justify-center p-2 bg-[#E8E6ED] rounded-full"
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

      <div className="flex flex-col items-start text-start gap-3 w-full">
        <h4 className="font-bold text-lg">Clínicas em Destaque</h4>
        {feedbackData.map((item) => (
          <a key={item.id} href={item.link}>
            {item.clinic}
          </a>
        ))}
      </div>

      <p className="font-bold text-center text-sm">St Doctor © 2023</p>
    </footer>
  );
}
