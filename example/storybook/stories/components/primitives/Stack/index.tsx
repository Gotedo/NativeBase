import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Stack } from './basic';
import { Example as Divider } from './divider';

export default {
  title: 'Stack',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Stack /> };
export const Story2 = { name: 'Divider', render: () => <Divider /> };
