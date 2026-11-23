import React from 'react';
import Wrapper from './../../components/Wrapper';
import { Example as Usage } from './usage';

export default {
  title: 'useBreakpointValue',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Usage', render: () => <Usage /> };
