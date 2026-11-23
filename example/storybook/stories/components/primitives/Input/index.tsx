import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Size } from './Size';
import { Example as Variant } from './Variant';
import { Example as Addons } from './Addons';
import { Example as Elements } from './Elements';
import { Example as Masked } from './Masked';
import { Example as Controlled } from './Controlled';
import { Example as FormControlled } from './FormControlled';

export default {
  title: 'Input',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Primary', render: () => <Basic /> };
export const Story2 = { name: 'Size ', render: () => <Size /> };
export const Story3 = { name: 'Variants', render: () => <Variant /> };
export const Story4 = { name: 'Addons', render: () => <Addons /> };
export const Story5 = { name: 'Elements', render: () => <Elements /> };
export const Story6 = { name: 'Password', render: () => <Masked /> };
export const Story7 = {
  name: 'Value Controlled',
  render: () => <Controlled />,
};
export const Story8 = {
  name: 'Form Controlled',
  render: () => <FormControlled />,
};
