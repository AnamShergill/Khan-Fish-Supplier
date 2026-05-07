import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  images: {
    // Remote patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    
    // Optimized device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    
    // Optimized image sizes for smaller images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // AVIF first for 30% smaller files, WebP as fallback
    formats: ['image/avif', 'image/webp'],
    
    // Aggressive quality settings for better performance
    qualities: [50, 65, 75],
    
    // Long cache TTL for better performance (1 year)
    minimumCacheTTL: 31536000,
    
    // Allow SVG with security
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Disable image optimization in development for faster builds
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
