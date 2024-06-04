// TODO mainnet -> change the address to the mainnet one
const AeFinderHost = 'https://home.aefinder.com';
const AeFinderAuthHost = 'https://testhome.aefinder.com';

module.exports = [
  {
    source: '/api/:path*',
    destination: `${AeFinderHost}/api/:path*`,
  },
  {
    source: '/connect/:path*',
    destination: `${AeFinderAuthHost}/connect/:path*`,
  },
];
