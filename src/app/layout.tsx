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
        <link rel="icon" href="/favicon.png" />
        <title>Oelrix – Ready-to-Use UI Assets & Craftrix Launch</title>
        <meta name="description" content="Unlock a universe of ready-to-use UI assets for developers and designers. Craftrix, our first project, is now live." />
        <meta name="keywords" content="UI assets, web development, design resources, Craftrix, Oelrix, components, templates, frontend, developer tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Oelrix – Ready-to-Use UI Assets & Craftrix Launch" />
        <meta property="og:description" content="Unlock a universe of ready-to-use UI assets for developers and designers. Craftrix, our first project, is now live." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oelrix.com/" />
        <meta property="og:image" content="/favicon.png" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oelrix – Ready-to-Use UI Assets & Craftrix Launch" />
        <meta name="twitter:description" content="Unlock a universe of ready-to-use UI assets for developers and designers. Craftrix, our first project, is now live." />
        <meta name="twitter:image" content="/favicon.png" />
      </head>
      <body>
        <RouteLoader />
        {children}
      </body>
    </html>
  );
}


