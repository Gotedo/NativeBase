import React from 'react';
import Wrapper from './../../components/Wrapper';
import { Example as RadioAndCheckbox } from './RadioAndCheckbox';
import { Example as PinInput } from './PinInput';
import { Example as Textarea } from './Textarea';
import { Example as Select } from './Select';
import { Example as NumberInput } from './NumberInput';
import { Example as Switch } from './Switch';
import { Example as Slider } from './Slider';
import { Example as DemoForm } from './DemoForm';
import { Example as Usage } from './Usage';

export default {
  title: 'React Hook Form',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Usage', render: () => <Usage /> };
export const Story2 = { name: 'DemoForm', render: () => <DemoForm /> };
export const Story3 = {
  name: 'Radio And Checkbox',
  render: () => <RadioAndCheckbox />,
};
export const Story4 = { name: 'Select', render: () => <Select /> };
export const Story5 = { name: 'Slider', render: () => <Slider /> };
export const Story6 = { name: 'Textarea', render: () => <Textarea /> };
export const Story7 = { name: 'Switch', render: () => <Switch /> };
export const Story8 = { name: 'NumberInput', render: () => <NumberInput /> };
export const Story9 = { name: 'PinInput', render: () => <PinInput /> };
