/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/my-portfolio-next' : '',
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
