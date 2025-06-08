/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/queer-elders-podcast",
  images: { unoptimized: true },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;