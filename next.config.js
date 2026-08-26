const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  compress: true,

  async redirects() {
    return [
      {
        source: '/websites/:path*',
        destination: '/project/:path*',
        permanent: true,
      },
      // Redirect all requests coming to the old .tech domain to the new .com domain
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'oelrix.tech' },
          { type: 'host', value: 'www.oelrix.tech' },
        ],
        destination: 'https://oelrix.com/:path*',
        permanent: true,
      },
      // Force www -> apex for .com
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'www.oelrix.com' },
        ],
        destination: 'https://oelrix.com/:path*',
        permanent: true,
      },
    ];
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', '@react-three/fiber', '@react-three/drei'],
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    // Optimize production builds
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test(module) {
                return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
              },
              name(module) {
                const hash = require('crypto').createHash('sha1');
                hash.update(module.identifier());
                return hash.digest('hex').substring(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  turbopack: {
    resolveAlias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

module.exports = nextConfig;
