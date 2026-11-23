import React from 'react';
import Wrapper from '../../Wrapper';
import { Example as Placement } from './Placement';
import { Example as Basic } from './Basic';
import { Example as CustomPosition } from './CustomPosition';

export default {
  title: 'Fab',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Placement', render: () => <Placement /> };
export const Story3 = {
  name: 'CustomPosition',
  render: () => <CustomPosition />,
};
