import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata = {
  
  title: "EnglishYaari: 1-on-1 Online Spoken English Tutor",
  description: "EnglishYaari gives you instant access to expert English tutors and helps you to speak English fluently and confidently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
