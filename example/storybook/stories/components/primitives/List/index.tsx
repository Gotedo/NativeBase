import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as UnorderedList } from './UnorderedList';
import { Example as StylingList } from './StylingList';
import { Example as OrderedList } from './OrderedList';
import { Example as Basic } from './Basic';
import { Example as ListWithIcon } from './ListWithIcon';
import { Example as PressableList } from './PressableList';
import { Example as VirtualizedList } from './VirtualizedList';

export default {
  title: 'List',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'OrderedList', render: () => <OrderedList /> };
export const Story3 = {
  name: 'UnorderedList',
  render: () => <UnorderedList />,
};
export const Story4 = { name: 'StylingList', render: () => <StylingList /> };
export const Story5 = {
  name: 'Pressable List Items',
  render: () => <PressableList />,
};
export const Story6 = {
  name: 'List with Icon',
  render: () => <ListWithIcon />,
};
export const Story7 = {
  name: 'VirtualizedList ',
  render: () => <VirtualizedList />,
};
