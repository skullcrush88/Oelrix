import './globals.css';
import RouteLoader from '../components/RouteLoader';

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Oelrix — Digital Design Studio</title>
        <meta name="description" content="Oelrix creates refined, modern websites for brands and businesses that value clarity, design, and presence." />
        <meta name="author" content="Oelrix" />
      </head>
      <body>
        <RouteLoader />
        {children}
      </body>
    </html>
  );
}


