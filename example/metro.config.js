const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const createAppPeerResolver = require('../scripts/create-app-peer-resolver.cjs');
const config = getDefaultConfig(__dirname);
config.watchFolders = [path.resolve(__dirname, '..')];
config.resolver.nodeModulesPaths = [
  path.join(__dirname, 'node_modules'),
  path.resolve(__dirname, '../node_modules'),
];
config.resolver.extraNodeModules = {
  'native-base': path.resolve(__dirname, '..'),
};
// extraNodeModules is a fallback; source outside the app can otherwise load
// the library's development copy of React before Metro consults that mapping.
config.resolver.resolveRequest = createAppPeerResolver(__dirname);
config.resolver.useWatchman = false;
config.maxWorkers = 2;
const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');
module.exports = withStorybook(config, {
  configPath: path.resolve(__dirname, 'storybook'),
});
