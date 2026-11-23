const path = require('path');
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    'native-base',
    'react-native-web',
    'react-native-svg',
    'react-native-safe-area-context',
  ],
  turbopack: {
    root: path.resolve(__dirname, '..'),
    resolveAlias: { 'react-native': 'react-native-web' },
    resolveExtensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.json',
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      ...config.resolve.extensions,
    ];
    return config;
  },
};
