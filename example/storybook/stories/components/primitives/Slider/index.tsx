import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Size } from './Size';
import { Example as Vertical } from './Vertical';
import { Example as Color } from './color';
import { Example as Value } from './Value';
import { Example as FormControlled } from './FormControlled';
import { Example as Customized } from './Customized';
import { Example as Playground } from './Playground';
import { Example as Disabled } from './isDisabled';
import { Example as ReadOnly } from './isReadOnly';

export default {
  title: 'Slider',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'Size', render: () => <Size /> };
export const Story4 = { name: 'Color', render: () => <Color /> };
export const Story5 = { name: 'Vertical', render: () => <Vertical /> };
export const Story6 = { name: 'Value', render: () => <Value /> };
export const Story7 = { name: 'Customized', render: () => <Customized /> };
export const Story8 = { name: 'Disabled', render: () => <Disabled /> };
export const Story9 = { name: 'ReadOnly', render: () => <ReadOnly /> };
export const Story10 = {
  name: 'Form Controlled',
  render: () => <FormControlled />,
};
