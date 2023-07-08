'use client';

import { useState } from 'react';

export default function LGPDBanner() {
  const [accepted, setAccepted] = useState(false);
  function ToggleAcceptTerm() {
    setAccepted((current) => !current);
  }
  return (
    <div
      id="banner"
      className={`${
        accepted ? 'opacity-0 h-0' : 'opacity-100 h-[200px]'
      } flex flex-col justify-center bg-primary-100 items-center py-4 text-white-200 px-4 gap-4 ease-linear duration-300`}
    >
      <p className="text-center text-sm">
        Utilizamos cookies para ajudar a personalizar conteúdo, medir anúncios e
        oferecer uma experiência mais segura para você. Ao continuar navegando
        neste site, você concorda com o uso destes cookies.{' '}
        <a href="#" className="underline">
          Política de Privacidade
        </a>
      </p>

      <button
        onClick={ToggleAcceptTerm}
        className="rounded-full py-3 px-8 border border-white-200"
      >
        Ok
      </button>
    </div>
  );
}
