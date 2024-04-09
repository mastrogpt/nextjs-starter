/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'web',
    output: 'export',
    images: {
        unoptimized:true
    }, 
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
