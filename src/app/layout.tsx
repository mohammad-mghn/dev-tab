import "./globals.css";

import AOSWrapper from "@/components/aos/wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
