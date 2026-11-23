import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as BorderRadius } from './BorderRadius';
import { Example as WithRef } from './WithRef';
import { Example as FallbackSupport } from './FallbackSupport';
import { Example as FallbackElement } from './FallbackElement';

export default {
  title: 'Image',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Sizes', render: () => <Sizes /> };
export const Story3 = { name: 'BorderRadius', render: () => <BorderRadius /> };
export const Story4 = {
  name: 'FallbackSupport',
  render: () => <FallbackSupport />,
};
export const Story5 = {
  name: 'FallbackElement',
  render: () => <FallbackElement />,
};
export const Story6 = { name: 'WithRef', render: () => <WithRef /> };
