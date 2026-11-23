import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './Basic';
import { Example as Playground } from './Playground';
import { Example as Multiple } from './Multiple';
import { Example as AccessingInternalState } from './AccessingInternalState';
import { Example as ExpandedStyle } from './ExpandedStyle';
import { Example as Toggle } from './Toggle';
import { Example as DefaultIndex } from './DefaultIndex';

export default {
  title: 'Accordion',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'Multiple', render: () => <Multiple /> };
export const Story4 = { name: 'Default Index', render: () => <DefaultIndex /> };
export const Story5 = { name: 'Toggle', render: () => <Toggle /> };
export const Story6 = {
  name: 'Expanded Style',
  render: () => <ExpandedStyle />,
};
export const Story7 = {
  name: 'Accessing Internal State',
  render: () => <AccessingInternalState />,
};
