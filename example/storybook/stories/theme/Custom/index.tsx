import React from 'react';
import { Example as Basic } from './Basic';
import { Example as CustomizingBase } from './CustomizingBase';
import { Example as CustomizingTheme } from './CustomizingTheme';
import { Example as CustomizingVariant } from './CustomizingVariant';
import { Example as CustomizingComponents } from './CustomizingComponents';

export default {
  title: 'Custom Theme',
  decorators: [(getStory: any) => getStory()],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'CustomizingTheme',
  render: () => <CustomizingTheme />,
};
export const Story3 = {
  name: 'CustomizingComponents',
  render: () => <CustomizingComponents />,
};
export const Story4 = {
  name: 'CustomizingBase',
  render: () => <CustomizingBase />,
};
export const Story5 = {
  name: 'CustomizingVariant',
  render: () => <CustomizingVariant />,
};
