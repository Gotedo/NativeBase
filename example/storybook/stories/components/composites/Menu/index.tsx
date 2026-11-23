import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Group } from './Group';
import { Example as MenuOptionsGroup } from './MenuOptionsGroup';
import { Example as MenuPositions } from './MenuPositions';

export default {
  title: 'Menu',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Group', render: () => <Group /> };
export const Story3 = {
  name: 'MenuOptionsGroup',
  render: () => <MenuOptionsGroup />,
};
export const Story4 = {
  name: 'Menu positions',
  render: () => <MenuPositions />,
};
