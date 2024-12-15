/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? 'https://github.com/Raha7325/my-portfolio' : '',
    basePath: isProd ? 'https://github.com/Raha7325/my-portfolio' : '',
    output: 'export'
};

export default nextConfig;
