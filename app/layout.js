import "./globals.css";

export const metadata = {
  title: "Semilore Isaiah — AI Automation",
  description: "AI-powered bots for businesses that want to grow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden', margin: 0 }}>{children}</body>
    </html>
  );
}