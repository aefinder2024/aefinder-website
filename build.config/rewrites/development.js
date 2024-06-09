// testnet
const AeFinderHost = 'https://gcptest-indexer-api.aefinder.io';
const AeFinderAuthHost = 'https://gcptest-indexer-auth.aefinder.io';

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
