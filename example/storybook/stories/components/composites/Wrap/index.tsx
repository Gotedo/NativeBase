import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Spacing } from './Spacing';
import { Example as AlignmentAlign } from './AlignmentAlign';
import { Example as AlignmentJustify } from './AlignmentJustify';

export default {
  title: 'Wrap',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Space', render: () => <Spacing /> };
export const Story3 = {
  name: 'AlignmentAlign',
  render: () => <AlignmentAlign />,
};
export const Story4 = {
  name: 'AlignmentJustify',
  render: () => <AlignmentJustify />,
};
