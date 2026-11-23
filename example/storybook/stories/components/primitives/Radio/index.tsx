import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Playground } from './playground';
import { Example as Disabled } from './disabled';
import { Example as CustomColor } from './customColor';
import { Example as CustomIcon } from './customIcon';
import { Example as Size } from './size';
import { Example as Invalid } from './invalid';
import { Example as FormControlled } from './formControlled';
import { Example as WithRef } from './withRef';
import { Example as ControlledRadio } from './controlledRadio';
import { Example as UncontrolledRadio } from './uncontrolledRadio';

export default {
  title: 'Radio',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = {
  name: 'Controlled Radio',
  render: () => <ControlledRadio />,
};
export const Story2 = {
  name: 'Uncontrolled Radio',
  render: () => <UncontrolledRadio />,
};
export const Story3 = { name: 'Playground', render: () => <Playground /> };
export const Story4 = { name: 'Disabled', render: () => <Disabled /> };
export const Story5 = { name: 'Invalid', render: () => <Invalid /> };
export const Story6 = { name: 'Size', render: () => <Size /> };
export const Story7 = { name: 'Custom Color', render: () => <CustomColor /> };
export const Story8 = { name: 'Custom Icon', render: () => <CustomIcon /> };
export const Story9 = {
  name: 'Form Controlled',
  render: () => <FormControlled />,
};
export const Story10 = { name: 'With Ref', render: () => <WithRef /> };
