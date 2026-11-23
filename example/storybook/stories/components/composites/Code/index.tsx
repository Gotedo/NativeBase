import React from 'react';
import Wrapper from './../../Wrapper';

import { Example as Basic } from './Basic';
import { Example as Colors } from './colors';

export default {
  title: 'Code',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Colors', render: () => <Colors /> };
