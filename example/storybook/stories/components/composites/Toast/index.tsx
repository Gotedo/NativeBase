import React from 'react';
import Wrapper from '../../Wrapper';
import { Example as ToastPositions } from './ToastPositions';
import { Example as ToastVariants } from './VariantRecipies';
import { Example as Basic } from './Basic';
import { Example as CloseToast } from './CloseToast';
import { Example as CustomComponent } from './CustomComponent';
import { Example as CustomComponentWithCustomId } from './CustomComponentWithCustomId';
import { Example as PreventDuplicate } from './PreventDuplicate';
import { Example as ToastStatus } from './StatusRecipies';
import { Example as StandaloneToast } from './StandaloneToast';

export default {
  title: 'Toast',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'Toast Positions',
  render: () => <ToastPositions />,
};
export const Story3 = {
  name: 'Custom Component',
  render: () => <CustomComponent />,
};
export const Story4 = {
  name: 'Custom Component with custom Id',
  render: () => <CustomComponentWithCustomId />,
};
export const Story5 = { name: 'CloseToast', render: () => <CloseToast /> };
export const Story6 = {
  name: 'Prevent Duplicate',
  render: () => <PreventDuplicate />,
};
export const Story7 = {
  name: 'Status Recipies',
  render: () => <ToastStatus />,
};
export const Story8 = {
  name: 'Variants Recipies',
  render: () => <ToastVariants />,
};
export const Story9 = { name: 'Toast Ref', render: () => <StandaloneToast /> };
