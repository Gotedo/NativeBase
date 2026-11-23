import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './Usage';
import { Example as FormControlled } from './FormControlled';
import { Example as Steps } from './Steps';
import { Example as DefaultValue } from './DefaultValue';
import { Example as Playground } from './Playground';
// import { Example as Combination } from './Combination';
import { Example as MinMax } from './MinMax';
// .add('Combination', () => <Combination />);

export default {
  title: 'NumberInput',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'DefaultValue', render: () => <DefaultValue /> };
export const Story4 = { name: 'MinMax', render: () => <MinMax /> };
export const Story5 = { name: 'Steps', render: () => <Steps /> };
export const Story6 = {
  name: 'FormControlled',
  render: () => <FormControlled />,
};
