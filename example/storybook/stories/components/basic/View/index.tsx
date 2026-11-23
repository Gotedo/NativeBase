import React from 'react';
import Wrapper from '../../Wrapper';
import { Example as Basic } from './Basic';

export default {
  title: 'View',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
