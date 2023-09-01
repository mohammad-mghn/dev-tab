import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-6 mx-auto lg:max-w-[75rem] 2xl:max-w-[75rem] bg-primary overflow-x-hidden">
        <Navbar />

        <div className="mt-24">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
