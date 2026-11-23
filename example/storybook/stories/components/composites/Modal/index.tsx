import React from 'react';
import Wrapper from '../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as ModalWithAvoidKeyboard } from './ModalWithAvoidKeyboard';
import { Example as ModalRefEg } from './ModalRefEg';
import { Example as MultipleModal } from './MultipleModal';
import { Example as Size } from './Size';
import { Example as ModalPlacement } from './ModalPlacement';
import { Example as CustomBackdrop } from './CustomBackdrop';

export default {
  title: 'Modal',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'Multiple modal',
  render: () => <MultipleModal />,
};
export const Story3 = {
  name: 'Modal Ref Examples',
  render: () => <ModalRefEg />,
};
export const Story4 = {
  name: 'Modal Placement',
  render: () => <ModalPlacement />,
};
export const Story5 = {
  name: 'Modal with Keyboard Avoid view',
  render: () => <ModalWithAvoidKeyboard />,
};
export const Story6 = { name: 'Modal Size Examples', render: () => <Size /> };
export const Story7 = {
  name: 'Modal Custom Backdrop',
  render: () => <CustomBackdrop />,
};
