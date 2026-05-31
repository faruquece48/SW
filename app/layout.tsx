import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Faruque Abdullah",
  description: "Academic & Professional Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <div className="mx-auto max-w-[1440px] bg-white shadow-lg">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}