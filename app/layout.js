import "./globals.css";

export const metadata = {
  title: "Semilore Isaiah — AI Automation",
  description: "AI-powered bots for businesses that want to grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}