const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',  // Static export for S3
  images: {
    unoptimized: true  // Disable Next.js image optimization for S3
  },
  trailingSlash: true  // Ensure URLs have trailing slashes for directories
};

export default nextConfig;