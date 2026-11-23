import React from 'react';
import { Example as WithRef } from './WithRef';
import { Example as Sizes } from './sizes';
import { Example as Basic } from './basic';
import { Example as Variants } from './variants';
import { Example as Loading } from './loading';
import { Example as Icons } from './icons';
import { Example as Composition } from './Composition';
import Wrapper from './../../Wrapper';

export default {
  title: 'Button',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Variants', render: () => <Variants /> };
export const Story3 = { name: 'Sizes', render: () => <Sizes /> };
export const Story4 = { name: 'Loading', render: () => <Loading /> };
export const Story5 = { name: 'Icons', render: () => <Icons /> };
export const Story6 = { name: 'Composition', render: () => <Composition /> };
export const Story7 = { name: 'WithRef', render: () => <WithRef /> };
