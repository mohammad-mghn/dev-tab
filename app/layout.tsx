import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body className="bg-primary overflow-x-hidden">{children}</body>
    </html>
  );
}
