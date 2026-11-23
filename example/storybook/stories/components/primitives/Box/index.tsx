import React from 'react';
import { Example as Basic } from './basic';
import { Example as LinearGrad } from './LinearGrad';
import { Example as WithRef } from './WithRef';
import { Example as Composition } from './composition';
// import { Example as CompositionCard } from './composition-card';
// import { Example as CompositionCard1 } from './composition-card1';
// import { Example as CompositionCard2 } from './composition-card2';
// import { Example as CompositionCard3 } from './composition-card3';
// import { Example as CompositionShoesCard } from './composition-shoes-card';
import Wrapper from './../../Wrapper';
// .add('Composition Card', () => <CompositionCard />)
// .add('Composition Shoes Card', () => <CompositionShoesCard />)
// .add('CompositionCard1', () => <CompositionCard1 />)
// .add('CompositionCard2', () => <CompositionCard2 />)
// .add('CompositionCard3', () => <CompositionCard3 />);

export default {
  title: 'Box',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic Box', render: () => <Basic /> };
export const Story2 = {
  name: 'LinearGradient Box',
  render: () => <LinearGrad />,
};
export const Story3 = { name: 'Composition', render: () => <Composition /> };
export const Story4 = { name: 'With Ref', render: () => <WithRef /> };
