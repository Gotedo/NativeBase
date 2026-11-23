import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './Usage';
import { Example as CustomStyle } from './CustomStyle';
import { Example as Playground } from './Playground';

export default {
  title: 'FormControl',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'CustomStyle', render: () => <CustomStyle /> };
