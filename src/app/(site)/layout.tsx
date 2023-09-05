import { Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-6 lg:px-10 xl:px-6 mx-auto lg:max-w-[75rem] 2xl:max-w-[75rem] bg-primary !overflow-x-hidden">
        <Navbar />

        <div className="mt-12">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
