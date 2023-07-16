"use client";

import { CloseCircle, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ContainedLink } from "./Link";

const NavigationMenuData = [
  { id: 0, label: "Início", link: "#home" },
  { id: 1, label: "Serviços", link: "#services" },
  { id: 2, label: "Demonstração", link: "#systemPreview" },
  { id: 3, label: "Depoimentos", link: "#feedback" },
];

interface NavigationMenuProps {
  isScrollAtTop: boolean;
}

export default function Navbar({ isScrollAtTop }: NavigationMenuProps) {
  const [menuActive, setMenuActive] = useState(false);
  function ToggleMenu() {
    setMenuActive((current) => !current);
  }
  return (
    <nav
      className={`${
        isScrollAtTop ? "" : "bg-[#ffffff54] backdrop-blur-sm"
      } fixed ease-linear duration-300 flex flex-col w-full py-2 items-center text-primary-100 z-50`}
    >
      <div className="flex w-4/5 max-w-7xl items-center justify-between">
        <a href="#">
          <Image
            src={"/images/logo.png"}
            width={70}
            height={70}
            alt="Logomarca St Doctor"
            className="lg:w-[111px]]"
          />
        </a>

        <button
          onClick={() => ToggleMenu()}
          className="flex p-4 text-primary-200 lg:hidden"
        >
          {menuActive ? (
            <CloseCircle variant="TwoTone" size={24} />
          ) : (
            <HambergerMenu variant="TwoTone" size={24} />
          )}
        </button>

        <ul className="lg:flex flex-row gap-6 text-black-100 items-center hidden">
          {NavigationMenuData.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary-100 border-b-2 border-transparent hover:border-primary-100 ease-in-out duration-300"
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
          <ContainedLink link={"#"} title="Testar" />

          <button className="flex items-center rounded-3xl w-fit px-12 justify-center border border-black-100 py-3 hover:scale-95 ease-in-out duration-300 hover:bg-[#63618310]">
            Login
          </button>
        </ul>
      </div>

      <div
        className={`${
          menuActive ? "opacity-100 bg-white-100 h-[268px]" : "opacity-0 h-0"
        }  ease-in duration-300 flex flex-col w-full items-start pl-3 gap-1 py-1`}
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
