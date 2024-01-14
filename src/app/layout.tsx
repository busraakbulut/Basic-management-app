import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Manage',
 description: 'Developed by Büşra Akbulut :)',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body>
    <ToastContainer />
    <div>
     <Header />
     <main>{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
