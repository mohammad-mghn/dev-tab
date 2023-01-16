import Navbar from "../components/navbar/navbar";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="px-6 mx-auto lg:max-w-[55rem] xl:max-w-[75rem] bg-primary overflow-x-hidden">
        <Navbar />

        <div className="overflow-x-visible">{children}</div>
      </body>
    </html>
  );
}
