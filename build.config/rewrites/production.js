// TODO mainnet -> change the address to the mainnet one
// const AeFinderHost = 'https://testhome.aefinder.io';
// const AeFinderAuthHost = 'https://testhome.aefinder.io';

const AeFinderHost = 'http://192.168.71.128:8081';
const AeFinderAuthHost = 'http://192.168.71.128:8082';

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
