import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Orientation } from './Orientation';
import { Example as Composition } from './Composition';

export default {
  title: 'Divider',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Orientation', render: () => <Orientation /> };
export const Story3 = { name: 'Composition', render: () => <Composition /> };
