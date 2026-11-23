import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as WithIcons } from './WithIcons';
import { Example as SquareCircle } from './SquareCircle';

export default {
  title: 'Center',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'WithIcons', render: () => <WithIcons /> };
export const Story3 = { name: 'SquareCircle', render: () => <SquareCircle /> };
