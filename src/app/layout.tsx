import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '유니팜 - 온실관리시스템 개인정보처리방침',
  description: 'Uni-farm Personal Information Processing Policy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-malgun text-gray-800 bg-gray-50">
        {children}
      </body>
    </html>
  )
}
