const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.watchFolders = [path.resolve(__dirname, '..')];
config.resolver.nodeModulesPaths = [
  path.join(__dirname, 'node_modules'),
  path.resolve(__dirname, '../node_modules'),
];
config.resolver.extraNodeModules = {
  'native-base': path.resolve(__dirname, '..'),
};
config.resolver.useWatchman = false;
config.maxWorkers = 2;
module.exports = config;
