import "./globals.css";
import "../lib/debugRepeat";
import NavBar from "../components/NavBar";
import RouteLoader from "../components/RouteLoader";
import RepeatDebugClient from "../components/RepeatDebugClient";
import CursorWrapper from "../components/CursorWrapper";

export const metadata = {
  title: "Oelrix — Premium Web Design Studio",
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
        <CursorWrapper />
        {children}
        <RepeatDebugClient />
        <NavBar />
        <RouteLoader />
      </body>
    </html>
  );
}


