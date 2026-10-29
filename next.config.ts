import type { NextConfig } from 'next';
const nextConfig: NextConfig = {reactStrictMode:true,poweredByHeader:false,async redirects(){return [{source:'/gallery',destination:'/innovation-lab',permanent:false},{source:'/celigo-webinar',destination:'/webinar',permanent:false}]}};
export default nextConfig;