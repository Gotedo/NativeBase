import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Size } from './Size';
import { Example as Variants } from './Variants';
import { Example as WithIcon } from './WithIcon';
import { Example as Custom } from './Custom';

export default {
  title: 'Tag',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Variants', render: () => <Variants /> };
export const Story3 = { name: 'Sizes', render: () => <Size /> };
export const Story4 = { name: 'WithIcon', render: () => <WithIcon /> };
export const Story5 = { name: 'Custom Tag', render: () => <Custom /> };
