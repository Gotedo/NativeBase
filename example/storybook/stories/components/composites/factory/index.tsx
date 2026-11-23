import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Usage } from './usage';
import { Example as Theme } from './theme';
import { Example as Modes } from './modes';
import { Example as Ref } from './ref';

export default {
  title: 'Factory',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Usage', render: () => <Usage /> };
export const Story2 = { name: 'Theme', render: () => <Theme /> };
export const Story3 = { name: 'Modes', render: () => <Modes /> };
export const Story4 = { name: 'Ref', render: () => <Ref /> };
