import React from 'react';
import Wrapper from './../../Wrapper';
import { Example } from './basic';

export default {
  title: 'VStack',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Example /> };
