import React from 'react';
import { Example } from './basic';
import Wrapper from './../../Wrapper';

export default {
  title: 'HStack',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Example /> };
