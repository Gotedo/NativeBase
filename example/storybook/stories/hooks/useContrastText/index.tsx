import React from 'react';
import Wrapper from '../../components/Wrapper';
import { Example as Basic } from './Basic';
import { Example as Variations } from './Variations';

export default {
  title: 'useContrastText',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Variations', render: () => <Variations /> };
