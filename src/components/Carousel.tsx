import Image from "next/image";

export function Carousel() {
  const Logos = [
    { id: 0, url: "/images/logoCarousel/logo1.png", w: 250, h: 46 },
    { id: 1, url: "/images/logoCarousel/logo2.png", w: 100, h: 50 },
    { id: 2, url: "/images/logoCarousel/logo3.png", w: 145, h: 30 },
    { id: 3, url: "/images/logoCarousel/logo4.png", w: 120, h: 50 },
    { id: 4, url: "/images/logoCarousel/logo5.png", w: 180, h: 45 },
  ];

  return (
    <div className="flex slider py-10 items-center justify-start">
      <div className="flex flex-row gap-12 items-center justify-center my-12 slide-track">
        {Logos.map((item) => (
          <Image
            key={item.id}
            src={item.url}
            alt={`Logomarca ${item}`}
            width={item.w}
            height={item.h}
            className={`flex slide`}
            quality={100}
          />
        ))}
      </div>
    </div>
  );
}
