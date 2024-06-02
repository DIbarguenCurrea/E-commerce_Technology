/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'static.fnac-static.com',
      },
      {
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        hostname: 'hips.hearstapps.com',
      },
      {
        hostname: 'store.storeimages.cdn-apple.com',
      },
      {
        hostname: 'cdn-7.nikon-cdn.com',
      },
      {
        hostname: 'i.pcmag.com',
      },
      {
        hostname: 'm.media-amazon.com',
      },
      {
        hostname: 'media.ldlc.com',
      },
      {
        hostname: 'www.apple.com',
      },
      {
        hostname: 'img.freepik.com',
      },
      {
        hostname: 'via.placeholder.com',
      },
      {
        hostname: 'dummyimage.com',
      },
      {
        hostname: 'cdn.shopify.com',
      },
    ]
  },
};

export default nextConfig;
