import "./globals.css";

export const metadata = {
  title: "REDX",
  description: "REDX - AI-powered digital platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
