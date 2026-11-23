import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as ChangingFontSize } from './ChangingFontSize';
import { Example as Overriden } from './Overriden';
import { Example as Truncated } from './Truncated';
import { Example as Nested } from './Nested';

export default {
  title: 'Text',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'Changing Font Size',
  render: () => <ChangingFontSize />,
};
export const Story3 = { name: 'Truncated', render: () => <Truncated /> };
export const Story4 = { name: 'Overriden', render: () => <Overriden /> };
export const Story5 = { name: 'Nested', render: () => <Nested /> };
