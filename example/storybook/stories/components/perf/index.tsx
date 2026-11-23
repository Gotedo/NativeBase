import React from 'react';
import { RNButtons } from './RNButton';
import { NBButtons } from './NBButton';
import { NativeBaseProvider, View as NBView } from 'native-base';
import { View } from 'react-native';

export default {
  title: 'Button Perf',
  decorators: [
    (getStory: any) => <NativeBaseProvider>{getStory()}</NativeBaseProvider>,
  ],
};
export const Story1 = { name: 'Empty', render: () => <></> };
export const Story2 = { name: 'PlainView', render: () => <View /> };
export const Story3 = { name: 'RNView', render: () => <NBView /> };
export const Story4 = { name: 'RNButtons', render: () => <RNButtons /> };
export const Story5 = { name: 'NBButtons', render: () => <NBButtons /> };
