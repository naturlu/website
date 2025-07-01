import "./globals.css";

export const metadata = {
  title: "NaturLu. O caminho da transformação",
  description: "Naturopatia moderna, personalizada e humana. O seu caminho para o bem-estar integral.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
