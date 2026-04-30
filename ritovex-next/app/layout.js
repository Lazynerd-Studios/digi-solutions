import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'Ritovex - Creative Agency',
    template: '%s - Ritovex',
  },
  description: 'Ritovex is a modern Creative Agency template, designed for startups, agencies, and professionals to build stunning, high-performing websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
