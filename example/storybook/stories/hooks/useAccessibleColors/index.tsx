import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Example as Basic } from './Basic';

export default {
  title: 'useAccessibleColors',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
