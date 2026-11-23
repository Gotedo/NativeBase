import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Composition } from './Composition';
import { Example as Basic } from './Basic';
import { Example as Flat } from './Flat';
import { Example as Size } from './Sizes';
import { Example as CustomBgColor } from './CustomBgColor';
import { Example as ColorScheme } from './ColorScheme';

export default {
  title: 'Progress',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Default Progress Bar', render: () => <Basic /> };
export const Story2 = { name: 'ColorSchemes', render: () => <ColorScheme /> };
export const Story3 = { name: 'Flat', render: () => <Flat /> };
export const Story4 = { name: 'Sizes', render: () => <Size /> };
export const Story5 = {
  name: 'CustomBgColor',
  render: () => <CustomBgColor />,
};
export const Story6 = { name: 'Composition', render: () => <Composition /> };
