import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Example as Basic } from './Basic';
import { Example as DefaultMode } from './DefaultMode';
import { Example as Persistence } from './Persistence';

const styles = StyleSheet.create({
  wrapper: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
});

export default {
  title: 'Mode',
  decorators: [
    (getStory: any) => <View style={styles.wrapper}>{getStory()}</View>,
  ],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'DefaultMode', render: () => <DefaultMode /> };
export const Story3 = { name: 'Persistence', render: () => <Persistence /> };
