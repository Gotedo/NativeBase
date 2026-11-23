import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Playground } from './Playground';

export default {
  title: 'Container',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
