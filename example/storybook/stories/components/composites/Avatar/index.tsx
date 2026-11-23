import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Playground } from './knobEnabled';
import { Example as Usage } from './usage';
import { Example as Size } from './size';
import { Example as Fallback } from './Fallback';
import { Example as AvatarBadge } from './AvatarBadge';
import { Example as AvatarGroup } from './AvatarGroup';

export default {
  title: 'Avatar',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Playground', render: () => <Playground /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'Size', render: () => <Size /> };
export const Story4 = { name: 'Fallback', render: () => <Fallback /> };
export const Story5 = { name: 'AvatarBadge', render: () => <AvatarBadge /> };
export const Story6 = { name: 'AvatarGroup', render: () => <AvatarGroup /> };
