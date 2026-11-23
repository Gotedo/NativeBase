import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Color } from './Color';
import { Example as Composition } from './Composition';
import { Example as IsLoaded } from './isLoaded';
import { Example as FadeDuration } from './FadeDuration';

export default {
  title: 'Skeleton',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Color', render: () => <Color /> };
export const Story3 = { name: 'Composition', render: () => <Composition /> };
export const Story4 = { name: 'FadeDuration', render: () => <FadeDuration /> };
export const Story5 = { name: 'isLoaded', render: () => <IsLoaded /> };
