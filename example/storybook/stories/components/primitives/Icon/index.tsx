import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as AllIcons } from './AllIcons';
import { Example as CustomIcon } from './CustomIcon';
import { Example as CreateIcon } from './CreateIcon';
import { Example as ThirdPartyIcons } from './ThirdPartyIcons';

export default {
  title: 'Icon',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'All Icons', render: () => <AllIcons /> };
export const Story2 = { name: 'Basic', render: () => <Basic /> };
export const Story3 = { name: 'Sizes', render: () => <Sizes /> };
export const Story4 = { name: 'CustomIcon', render: () => <CustomIcon /> };
export const Story5 = { name: 'CreateIcon', render: () => <CreateIcon /> };
export const Story6 = {
  name: 'Integration with Third Party Icons',
  render: () => <ThirdPartyIcons />,
};
