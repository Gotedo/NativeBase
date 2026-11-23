import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as ZStack } from './example';
import { Example as CenterStack } from './CenterStack';

export default {
  title: 'ZStack',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic ZStack', render: () => <ZStack /> };
export const Story2 = {
  name: 'ZStack items centered',
  render: () => <CenterStack />,
};
