// TODO mainnet -> change the address to the mainnet one
const AeFinderHost = 'https://gcp-indexer-api.aelf.io';
const AeFinderAuthHost = 'https://indexer-auth.aefinder.io';

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
