import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";
export const metadata = {
  title: "Drivewise",
  description: "Best car rental booking site",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
