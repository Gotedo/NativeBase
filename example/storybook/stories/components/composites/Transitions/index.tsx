import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Fade } from './Fade';
import { Example as ScaleFade } from './ScaleFade';
import { Example as Slide } from './Slide';
import { Example as SlideWrapped } from './SlideWrapped';
import { Example as SlideFade } from './SlideFade';
import { Example as Stagger } from './Stagger';
import { Example as SlideComposition } from './SlideComposition';

export default {
  title: 'Transitions',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Fade', render: () => <Fade /> };
export const Story2 = { name: 'ScaleFade', render: () => <ScaleFade /> };
export const Story3 = { name: 'Slide', render: () => <Slide /> };
export const Story4 = {
  name: 'Slide wrapped inside parent',
  render: () => <SlideWrapped />,
};
export const Story5 = { name: 'SlideFade', render: () => <SlideFade /> };
export const Story6 = {
  name: 'SlideComposition',
  render: () => <SlideComposition />,
};
export const Story7 = { name: 'Stagger', render: () => <Stagger /> };
