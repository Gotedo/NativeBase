import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './Usage';
import { Example as ManageFocus } from './ManageFocus';
import { Example as DefaultValue } from './DefaultValue';
import { Example as Size } from './Size';
import { Example as Playground } from './Playground';
import { Example as Variants } from './Variants';
import { Example as FormControlled } from './FormControlled';
import { Example as Placeholder } from './Placeholder';

export default {
  title: 'PinInput',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'Size', render: () => <Size /> };
export const Story4 = { name: 'DefaultValue', render: () => <DefaultValue /> };
export const Story5 = { name: 'Placeholder', render: () => <Placeholder /> };
export const Story6 = { name: 'ManageFocus', render: () => <ManageFocus /> };
export const Story7 = { name: 'Variants', render: () => <Variants /> };
export const Story8 = {
  name: 'FormControlled',
  render: () => <FormControlled />,
};
