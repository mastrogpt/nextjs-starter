/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'web',
    async rewrites() {
        return [
            {
                source: '/api/my/:path*',
                destination: `${process.env.NUVDEV_HOST}/api/my/:path*`,
            },
        ];
    }
};

export default nextConfig;
