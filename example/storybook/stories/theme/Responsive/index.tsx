import React from 'react';
import Wrapper from './../../components/Wrapper';
import { Example as Basic } from './Basic';
import { Example as FontSize } from './FontSize';
import { Example as Direction } from './Direction';
import { Example as More } from './More';
import { Example as Demo } from './Demo';

export default {
  title: 'Responsive',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'FontSize', render: () => <FontSize /> };
export const Story3 = { name: 'More', render: () => <More /> };
export const Story4 = { name: 'Direction', render: () => <Direction /> };
export const Story5 = { name: 'Demo', render: () => <Demo /> };
