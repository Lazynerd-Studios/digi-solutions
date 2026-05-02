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
    default: 'DigiSolutions - IT Services & Digital Infrastructure',
    template: '%s - DigiSolutions',
  },
  description: 'DigiSolutions is a leading IT services company specializing in digital signage, network deployment, and structured cabling for modern businesses.',
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
