import './globals.css';
import NavBar from '../components/NavBar';
import RouteLoader from '../components/RouteLoader';

export const metadata = {
  title: "Oelrix — Modern Websites for Brands",
  description:
    "Oelrix creates refined, modern websites for businesses and brands that value clarity, design, and presence.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: '#000' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Oelrix" />
      </head>
      <body style={{ background: '#000' }}>
        {children}
        <NavBar />
        <RouteLoader />
      </body>
    </html>
  );
}


