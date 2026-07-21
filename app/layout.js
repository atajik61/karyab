import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'KaarYab',
  description: 'KaarYab',
};

export default function RootLayout({children}){
  return(
      <html lang="en">
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
  )
}