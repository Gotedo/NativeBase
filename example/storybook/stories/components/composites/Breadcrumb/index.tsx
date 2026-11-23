import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Separators } from './Separators';
import { Example as ComponentSeparator } from './ComponentSeparator';
import { Example as Composition } from './Composition';
import { Example as Collapsible } from './Collapsible';

export default {
  title: 'Breadcrumb',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'Separators', render: () => <Separators /> };
export const Story3 = {
  name: 'ComponentSeparator',
  render: () => <ComponentSeparator />,
};
export const Story4 = { name: 'Composition', render: () => <Composition /> };
export const Story5 = { name: 'Collapsible', render: () => <Collapsible /> };
