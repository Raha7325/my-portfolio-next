/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/my-portfolio' : '',
    assetPrefix: isProd ? '/my-portfolio/' : '',
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    publicRuntimeConfig: {
        basePath: isProd ? '/my-portfolio' : '',
    },
};

module.exports = nextConfig;
