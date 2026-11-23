import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as RefEg } from './RefEg';
import { Example as PopoverPositions } from './PopoverPositions';

export default {
  title: 'Popover',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = {
  name: 'Popover positions',
  render: () => <PopoverPositions />,
};
export const Story2 = { name: 'Basic', render: () => <Basic /> };
export const Story3 = { name: 'Focus on Open', render: () => <RefEg /> };
