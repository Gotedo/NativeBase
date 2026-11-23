import React from 'react';
import { View } from 'react-native';
import { Example as Basic } from './Basic';

export default {
  title: 'useColorMode',
  decorators: [
    (getStory: any) => <View style={{ flex: 1 }}>{getStory()}</View>,
  ],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
