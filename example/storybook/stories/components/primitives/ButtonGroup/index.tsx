import React from 'react';
import { Example as Sizes } from './sizes';
import { Example as Basic } from './basic';
import { Example as Variants } from './variants';
import { Example as IsAttached } from './isAttached';
import { Example as Direction } from './direction';
import Wrapper from './../../Wrapper';

export default {
  title: 'ButtonGroup',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Variants', render: () => <Variants /> };
export const Story3 = { name: 'Sizes', render: () => <Sizes /> };
export const Story4 = { name: 'isAttached', render: () => <IsAttached /> };
export const Story5 = { name: 'direction', render: () => <Direction /> };
