import React from 'react';
import Wrapper from './../../Wrapper';
import { UsingComponent } from './UsingComponent';
import { UsingComponentWithRenderItem } from './UsingComponentWithRenderItem';
import { UsingControlledInput } from './UsingControlledInput';
import { UsingWithAPI } from './UsingWithAPI';
import { UsingHook } from './UsingHook';

export default {
  title: 'Typeahead',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <UsingComponent /> };
export const Story2 = {
  name: 'Using render item',
  render: () => <UsingComponentWithRenderItem />,
};
export const Story3 = {
  name: 'Using Controlled input',
  render: () => <UsingControlledInput />,
};
export const Story4 = {
  name: 'Using with async API',
  render: () => <UsingWithAPI />,
};
export const Story5 = {
  name: 'Custom Typeahead using useTypeahead hook',
  render: () => <UsingHook />,
};
