import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Color } from './color';
import { Example as Playground } from './knobEnabled';
import { Example as Variants } from './variants';
import { Example as Composition } from './composition';
import { Example as Icon } from './icons';

export default {
  title: 'Badge',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'Icon', render: () => <Icon /> };
export const Story4 = { name: 'Color', render: () => <Color /> };
export const Story5 = { name: 'Variants', render: () => <Variants /> };
export const Story6 = { name: 'Composition', render: () => <Composition /> };
