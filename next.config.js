/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/my-portfolio' : '',
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/my-portfolio/' : '',
};

module.exports = nextConfig;
