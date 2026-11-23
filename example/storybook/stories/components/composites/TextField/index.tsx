import React from 'react';
import Wrapper from '../../Wrapper';
import { Example as Invalid } from './Invalid';
import { Example as WithIcon } from './WithIcon';
import { Example as Select } from './Select';
import { Example as Textarea } from './Textarea';
import { Example as Basic } from './Basic';

export default {
  title: 'TextField',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Textarea', render: () => <Textarea /> };
export const Story3 = { name: 'Select', render: () => <Select /> };
export const Story4 = { name: 'WithIcon', render: () => <WithIcon /> };
export const Story5 = { name: 'Invalid', render: () => <Invalid /> };
