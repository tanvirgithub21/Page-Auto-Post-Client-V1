import Navbar from "@/components/navbar/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark dark:bg-[#0E1628] dark:text-[#b9cbe5] min-h-screen w-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
