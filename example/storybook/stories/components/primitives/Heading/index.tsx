import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as Truncate } from './Truncate';
import { Example as OverridenStyle } from './OverridenStyle';
import { Example as Composition } from './Composition';

export default {
  title: 'Heading',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Sizes', render: () => <Sizes /> };
export const Story3 = { name: 'Truncate', render: () => <Truncate /> };
export const Story4 = {
  name: 'OverridenStyle',
  render: () => <OverridenStyle />,
};
export const Story5 = { name: 'Composition', render: () => <Composition /> };
