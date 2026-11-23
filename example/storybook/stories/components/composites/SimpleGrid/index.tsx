import React from 'react';
import Wrapper from './../../Wrapper';
import NumberOfColumnsSimpleGrid from './NumberOfColumns';
import MinChildWidthSimpleGrid from './MinWidthColumns';

export default {
  title: 'SimpleGrid',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = {
  name: 'Using columns',
  render: () => <NumberOfColumnsSimpleGrid />,
};
export const Story2 = {
  name: 'Using minChildWidth',
  render: () => <MinChildWidthSimpleGrid />,
};
