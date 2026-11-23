import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Example } from './Example';
import { Example as Indicator } from './Indicator';

export default {
  title: 'Stat',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Default Stat', render: () => <Example /> };
export const Story2 = {
  name: 'Stat with Indicator',
  render: () => <Indicator />,
};
