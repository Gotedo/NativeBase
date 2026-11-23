import React from 'react';
import Wrapper from './../../Wrapper';

import Examples from './AppBarExamples';

export default {
  title: 'AppBar',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Examples', render: () => <Examples /> };
