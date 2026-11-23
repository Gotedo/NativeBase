import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Playground } from './playground';
import { Example as Disabled } from './disabled';
import { Example as Basic } from './basic';
import { Example as CustomColor } from './customColor';
import { Example as Size } from './size';
import { Example as CustomIcon } from './customIcon';
import { Example as Invalid } from './invalid';
import { Example as WithRef } from './withRef';
import { Example as FormControlled } from './FormControlled';
import { Example as CheckboxGroup } from './checkboxGroup';
import { Example as ControlledCheckbox } from './controlledCheckbox';
import { Example as UnControlledCheckbox } from './uncontrolledCheckbox';

export default {
  title: 'Checkbox',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Playground', render: () => <Playground /> };
export const Story3 = {
  name: 'Controlled checkbox',
  render: () => <ControlledCheckbox />,
};
export const Story4 = {
  name: 'Uncontrolled checkbox',
  render: () => <UnControlledCheckbox />,
};
export const Story5 = { name: 'Disabled', render: () => <Disabled /> };
export const Story6 = { name: 'Invalid', render: () => <Invalid /> };
export const Story7 = { name: 'Size', render: () => <Size /> };
export const Story8 = { name: 'Custom Color', render: () => <CustomColor /> };
export const Story9 = { name: 'Custom Icon', render: () => <CustomIcon /> };
export const Story10 = {
  name: 'Checkbox Group',
  render: () => <CheckboxGroup />,
};
export const Story11 = {
  name: 'Form Controlled',
  render: () => <FormControlled />,
};
export const Story12 = { name: 'With Ref', render: () => <WithRef /> };
