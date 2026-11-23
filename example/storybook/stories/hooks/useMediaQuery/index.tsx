import React from 'react';
import Wrapper from './../../components/Wrapper';
import { Example as MinWidth } from './min-width';
import { Example as MaxHeight } from './max-height';
import { Example as Orientation } from './orientation';

export default {
  title: 'useMediaQuery',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'MinWidth', render: () => <MinWidth /> };
export const Story2 = { name: 'MaxHeight', render: () => <MaxHeight /> };
export const Story3 = { name: 'Orientation', render: () => <Orientation /> };
