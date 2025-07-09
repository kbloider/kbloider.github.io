import './globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: '다독다독',
  description: '유튜브 다독다독 공식 홈페이지',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col font-sans">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              다독다독
            </Link>
            <nav className="space-x-4">
              <Link href="/videos" className="text-gray-600 hover:text-blue-600">
                추천 영상
              </Link>
              <Link href="/hosts" className="text-gray-600 hover:text-blue-600">
                출연자
              </Link>
              <Link href="/books" className="text-gray-600 hover:text-blue-600">
                책
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                문의
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-100">
          <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} 다독다독. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}