import React from 'react';
import { Example as Flex } from './basic';
import { Example as SpacerExample } from './spacer';
import Wrapper from './../../Wrapper';

export default {
  title: 'Flex',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic Usage', render: () => <Flex /> };
export const Story2 = {
  name: 'Spacer Example',
  render: () => <SpacerExample />,
};
