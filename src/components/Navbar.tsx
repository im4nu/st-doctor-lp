'use client';

import { CloseCircle, HambergerMenu } from 'iconsax-react';
import Image from 'next/image';
import { useState } from 'react';

const NavigationMenuData = [
  { id: 0, label: 'Início', link: '#home' },
  { id: 1, label: 'Serviços', link: '#services' },
  { id: 2, label: 'Demonstração', link: '#systemPreview' },
  { id: 2, label: 'Depoimentos', link: '#feedback' },
];

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  function ToggleMenu() {
    setMenuActive((current) => !current);
  }
  return (
    <nav className="fixed flex flex-col w-full py-2 items-center text-primary-100 z-50">
      <div className="flex w-4/5 max-w-7xl items-center justify-between">
        <a href="#">
          <Image
            src={'/images/logo.png'}
            width={70}
            height={70}
            alt="Logomarca St Doctor"
            className="lg:h-[111px] lg:w-[111px]]"
          />
        </a>

        <button
          onClick={() => ToggleMenu()}
          className="flex p-4 text-primary-200"
        >
          {menuActive ? (
            <CloseCircle variant="TwoTone" size={24} />
          ) : (
            <HambergerMenu variant="TwoTone" size={24} />
          )}
        </button>
      </div>

      <div
        className={`${
          menuActive ? 'opacity-100 bg-white-100' : 'opacity-0'
        }  ease-in duration-500 flex flex-col w-full items-start pl-3 gap-1 py-1`}
      >
        {menuActive && (
          <>
            {NavigationMenuData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={ToggleMenu}
                className="p-2"
              >
                {item.label}
              </a>
            ))}
            <a href="#" className="p-2 underline">
              Fazer um teste agora
            </a>
            <a href="#" className="p-2 underline">
              Entrar
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
