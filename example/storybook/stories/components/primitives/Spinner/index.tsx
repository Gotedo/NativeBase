import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Color } from './color';
import { Example as Size } from './size';
import { Example as Playground } from './withKnob';
// .add('Variant', () => <Variant />);
// .add('Duration', () => <Duration />);

export default {
  title: 'Spinner',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'Color', render: () => <Color /> };
export const Story4 = { name: 'Size', render: () => <Size /> };
