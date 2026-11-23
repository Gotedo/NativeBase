import React from 'react';
import Wrapper from './../../Wrapper';
// import { Example as Playground } from './knobEnabled';
import { Example as Composition } from './composition';
import { Example as Basic } from './basic';
import { Example as Usage } from './usage';
import { Example as Variant } from './variant';
import { Example as Status } from './status';
import { Example as ColorScheme } from './colorScheme';
import { Example as Action } from './action';

export default {
  title: 'Alert',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Usage', render: () => <Usage /> };
export const Story3 = { name: 'Status', render: () => <Status /> };
export const Story4 = { name: 'ColorScheme', render: () => <ColorScheme /> };
export const Story5 = { name: 'Variant', render: () => <Variant /> };
export const Story6 = { name: 'Composition', render: () => <Composition /> };
export const Story7 = { name: 'action', render: () => <Action /> };
