const path = require('node:path');

const sharedPeers = [
  'react',
  'react-dom',
  'react-native',
  'react-native-web',
  'react-native-safe-area-context',
  'react-native-svg',
];

/** Resolve shared runtime peers from the app, including imports from library source. */
module.exports = function createAppPeerResolver(projectRoot) {
  const appOrigin = path.join(projectRoot, 'package.json');
  return (context, moduleName, platform) => {
    const isSharedPeer = sharedPeers.some(
      (name) => moduleName === name || moduleName.startsWith(`${name}/`)
    );
    return context.resolveRequest(
      isSharedPeer ? { ...context, originModulePath: appOrigin } : context,
      moduleName,
      platform
    );
  };
};
