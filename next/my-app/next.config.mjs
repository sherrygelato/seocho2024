/** @type {import('next').NextConfig} */
const isReal = process.env.NODE_ENV === 'production';

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
      port: '',
      pathname: '/**',
    },
  ],
};

const nextConfig = {
  images,
  compiler: {
    removeConsole: {
      exclude: ['error', 'debug'],
    },
  },
};

const nextConfigDev = {
  images,
  compiler: {},
};

export default isReal ? nextConfig : nextConfigDev;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'via.placeholder.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default nextConfig;
