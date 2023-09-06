import { Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layoutClassName: string =
    "px-6 lg:px-10 xl:px-6 mx-auto lg:max-w-[75rem] 2xl:max-w-[75rem]";

  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className="bg-primary w-screen">
        <div className={layoutClassName}>
          <Navbar />
        </div>

        <div className="w-screen overflow-x-hidden">
          <div className={`mt-12 ${layoutClassName}`}>{children}</div>
        </div>

        <div className={layoutClassName}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
