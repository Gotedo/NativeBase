import React from 'react';
import { Example as Basic } from './Basic';
import Wrapper from './../../Wrapper';

export default {
  title: 'Column',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
