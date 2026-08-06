import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SavedProvider } from "@/context/SavedContext";

export const metadata = {
  title: "KaarYab",
  description: "KaarYab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SavedProvider>
          <Navbar />
          {children}
          <Footer />
        </SavedProvider>
      </body>
    </html>
  );
}
