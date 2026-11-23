import React from 'react';
import Wrapper from './../../components/Wrapper';
import { Example as Usage } from './Usage';

export default {
  title: 'useClipboard',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Usage', render: () => <Usage /> };
