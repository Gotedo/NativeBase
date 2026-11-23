import React from 'react';
import Wrapper from '../../Wrapper';
import { Example as Icon } from './Icon';
import { Example as Usage } from './Usage';
import { Example as Composition } from './Composition';
import { Example as DisableOverlay } from './DisableOverlay';
import { Example as CustomBackdrop } from './CustomBackdrop';

export default {
  title: 'Actionsheet',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Usage', render: () => <Usage /> };
export const Story2 = { name: 'Icon', render: () => <Icon /> };
export const Story3 = {
  name: 'DisableOverlay',
  render: () => <DisableOverlay />,
};
export const Story4 = { name: 'Composition', render: () => <Composition /> };
export const Story5 = {
  name: 'Custom Backdrop',
  render: () => <CustomBackdrop />,
};
