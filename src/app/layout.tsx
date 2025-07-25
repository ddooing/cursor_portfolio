import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '임승연 포트폴리오',
  description: '신입 웹 개발자 임승연의 포트폴리오입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSansKr.variable}`}>
      <body className={notoSansKr.className}>{children}</body>
    </html>
  )
}
