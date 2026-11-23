import React from 'react';
import Wrapper from '../../Wrapper';
import { Example as Usage } from './Usage';
import { Example as Controlled } from './Controlled';
import { Example as TabBarOnly } from './TabBarOnly';
import { Example as FittedTab } from './FittedTab';
import { Example as TabAlignment } from './TabAlignment';
import { Example as IconTabs } from './IconTabs';
import { Example as Size } from './Size';
import { Example as Colors } from './Colors';
import { Example as Composition } from './Composition';
import { Example as Variants } from './Variants';

export default {
  title: 'Tabs',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Usage /> };
export const Story2 = { name: 'Colors', render: () => <Colors /> };
export const Story3 = { name: 'Size', render: () => <Size /> };
export const Story4 = { name: 'Variants', render: () => <Variants /> };
export const Story5 = { name: 'IconTabs', render: () => <IconTabs /> };
export const Story6 = { name: 'Tab Alignment', render: () => <TabAlignment /> };
export const Story7 = { name: 'Fitted Tab', render: () => <FittedTab /> };
export const Story8 = { name: 'Controlled', render: () => <Controlled /> };
export const Story9 = { name: 'TabBarOnly', render: () => <TabBarOnly /> };
export const Story10 = { name: 'Composition', render: () => <Composition /> };
