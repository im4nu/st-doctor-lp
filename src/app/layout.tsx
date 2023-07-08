import './globals.css'
import { Source_Sans_3 } from 'next/font/google'

const SourceSansPro = Source_Sans_3({ subsets: ['latin'] })

export const metadata = {
  title: 'St Doctor | O melhor para sua clínica',
  description: 'Seja bem vindo ao website do melhor e maior sistema que a sua clínica pode ter, contamos com sistema web e aplicativos na play store e apple store. Faça já um teste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={SourceSansPro.className}>{children}</body>
    </html>
  )
}
