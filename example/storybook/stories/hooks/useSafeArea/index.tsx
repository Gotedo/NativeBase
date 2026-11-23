import React from 'react';
import { View } from 'react-native';
import { Example as Flexible } from './Flexible';
import { Example as Fixed } from './Fixed';
import { Example as Hook } from './Hook';

export default {
  title: 'useSafeArea',
  decorators: [(getStory: any) => <View>{getStory()}</View>],
};
export const Story1 = { name: 'Flexible', render: () => <Flexible /> };
export const Story2 = { name: 'Fixed', render: () => <Fixed /> };
export const Story3 = { name: 'Hook', render: () => <Hook /> };
