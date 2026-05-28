import "./globals.css";

export const metadata = {
  title: "Semilore Isaiah — AI Automation",
  description: "AI-powered bots for businesses that want to grow",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Semilore Isaiah — AI Automation",
    description: "AI-powered bots for businesses that want to grow",
    url: "https://semiloreisaiah.dev",
    siteName: "Semilore Isaiah",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Semilore Isaiah — AI Automation",
    description: "AI-powered bots for businesses that want to grow",
    images: ['/og-image.png'],
  },
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