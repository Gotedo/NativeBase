const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const root = path.resolve(__dirname, '..');
module.exports = mergeConfig(getDefaultConfig(__dirname), {
  watchFolders: [root],
  maxWorkers: 2,
  resolver: {
    useWatchman: false,
    nodeModulesPaths: [
      path.join(__dirname, 'node_modules'),
      path.join(root, 'node_modules'),
    ],
    extraNodeModules: Object.fromEntries(
      [
        'react',
        'react-native',
        'react-native-safe-area-context',
        'react-native-svg',
      ].map(name => [name, path.join(__dirname, 'node_modules', name)]),
    ),
    blockList:
      /\/NativeBase\/node_modules\/(react|react-native|react-native-safe-area-context|react-native-svg)\/.*$/,
  },
});
