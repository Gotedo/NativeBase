import React from 'react';
import Wrapper from './../../Wrapper';

import { Example as Basic } from './Basic';
import { Example as Callback } from './Callback';
import { Example as Duration } from './Duration';

export default {
  title: 'Collapse',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'Animation Duration',
  render: () => <Duration />,
};
export const Story3 = {
  name: 'onAnimationStart and onAnimationEnd',
  render: () => <Callback />,
};
