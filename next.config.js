/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {

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
