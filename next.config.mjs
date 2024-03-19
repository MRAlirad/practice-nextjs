/** @type {import('next').NextConfig} */
const nextConfig = {
    // we need to register the domain so we allow to serve images and remote patterns for security reasons
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bit.ly',
            }
        ]
    }
};

export default nextConfig;
