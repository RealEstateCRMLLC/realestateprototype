/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Mounted under /prototype/ on the production domain (nginx reverse
  // proxy). basePath makes Next emit prefix-correct asset URLs and
  // Link/router paths (same pattern as leadg/foreclosureworkflow). The
  // /api rewrite below stays relative to the basePath and proxies to the
  // prototype Express API on localhost:3012.
  basePath: '/prototype',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3012/api/:path*',
      },
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
