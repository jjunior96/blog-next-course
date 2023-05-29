import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactStrictMode: true,
    swcMinify: true
  }
}

export default withContentlayer(nextConfig)
