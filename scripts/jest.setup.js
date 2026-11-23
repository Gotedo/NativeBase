// React Aria's test-only viewport shim expects a browser screen object.
global.screen = { orientation: { angle: 0, type: 'landscape-primary' } };
jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default
);
