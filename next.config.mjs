import withPlugins from 'next-compose-plugins';
import { withContentlayer } from 'next-contentlayer';
import withPWAInit from 'next-pwa';

const isDev = process.env.NODE_ENV !== 'production';

const withPWA = withPWAInit({
  dest: 'public',
  exclude: [
    ({ asset }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }

      return isDev && !asset.name.startsWith('static/runtime/');
    }
  ]
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true
  }
};

export default withPlugins([withPWA, withContentlayer], nextConfig);
