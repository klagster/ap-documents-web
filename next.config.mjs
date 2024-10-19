const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/klagster.github.io' : '',
  assetPrefix: isProd ? '/klagster.github.io/' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;