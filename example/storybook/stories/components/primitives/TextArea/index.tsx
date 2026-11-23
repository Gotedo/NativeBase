import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as TextArea } from './basic';
import { Example as Invalid } from './invalid';
import { Example as Size } from './size';
import { Example as Value } from './value';

export default {
  title: 'TextArea',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Default', render: () => <TextArea /> };
export const Story2 = {
  name: 'InValid and Disabled',
  render: () => <Invalid />,
};
export const Story3 = { name: 'Sizes', render: () => <Size /> };
export const Story4 = { name: 'Value Controlled', render: () => <Value /> };
