import "./globals.css";

export const metadata = {
  title: "Aziz Dhifaoui | Full Stack JS & Network Expert",
  description:
    "Portfolio of a Full Stack JavaScript Developer and Network Expert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
