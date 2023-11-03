import "./globals.css";
import { Source_Sans_3 } from "next/font/google";

const SourceSansPro = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "St Doctor | O melhor para sua clínica",
  description:
    "Seja bem vindo ao website do melhor e maior sistema que a sua clínica pode ter, contamos com sistema web e aplicativos na play store e apple store. Faça já um teste",
  openGraph: {
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <meta property="og:image:alt" content="About Acme" />

        <meta property="twitter:image:alt" content="About Acme" />
      </head>

      <body className={SourceSansPro.className}>{children}</body>
    </html>
  );
}
