/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/my-portfolio/' : '',
    basePath: isProd ? '/my-portfolio' : '',
    output: 'export'
};

export default nextConfig;
