import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as Variant } from './Variant';
import { Example as SVGIcon } from './SVGIcon';

export default {
  title: 'IconButton',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Sizes', render: () => <Sizes /> };
export const Story3 = { name: 'Variant', render: () => <Variant /> };
export const Story4 = { name: 'SVGIcon', render: () => <SVGIcon /> };
