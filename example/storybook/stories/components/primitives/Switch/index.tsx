import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as SwitchBgColor } from './SwitchBgColor';
import { Example as Accessibility } from './Accessibility';
import { Example as ColorSchemes } from './ColorSchemes';

export default {
  title: 'Switch',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Sizes', render: () => <Sizes /> };
export const Story3 = {
  name: 'Switch bgColor',
  render: () => <SwitchBgColor />,
};
export const Story4 = { name: 'ColorSchemes', render: () => <ColorSchemes /> };
export const Story5 = {
  name: 'Accessibility',
  render: () => <Accessibility />,
};
