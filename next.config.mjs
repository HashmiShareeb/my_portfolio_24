import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },

  // Support MDX files as pages:
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
