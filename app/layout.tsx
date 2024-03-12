import "./globals.css";
import { Navbar , Footer } from "@/components";


export const metadata= {
  title: "Suji Travels",
  description: "Discover The Best Cars In Guntur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
