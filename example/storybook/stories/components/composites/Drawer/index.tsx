import React from 'react';
import Wrapper from '../../Wrapper';
import Basic from './Basic';

export default {
  title: 'Drawer',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
