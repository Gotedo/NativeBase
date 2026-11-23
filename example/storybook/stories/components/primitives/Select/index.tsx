import React from 'react';
import { Example as Basic } from './Basic';
import { Example as FormControlled } from './FormControlled';
import { Example as SelectLongList } from './SelectLongList';
import Wrapper from './../../Wrapper';

export default {
  title: 'Select',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'FormControlled',
  render: () => <FormControlled />,
};
export const Story3 = {
  name: 'Select Long list',
  render: () => <SelectLongList />,
};
