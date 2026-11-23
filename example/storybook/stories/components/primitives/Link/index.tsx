import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as DefaultLink } from './Basic';
import { Example as ExternalLink } from './ExternalLink';
import { Example as CustomOnPress } from './CustomOnPress';
import { Example as UnderlineLink } from './UnderlineLink';
import { Example as CompositeLink } from './CompositeLink';

export default {
  title: 'Link',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Default Link', render: () => <DefaultLink /> };
export const Story2 = { name: 'External Link', render: () => <ExternalLink /> };
export const Story3 = {
  name: 'Custom Function onPress Link',
  render: () => <CustomOnPress />,
};
export const Story4 = {
  name: 'Composite Link Example',
  render: () => <CompositeLink />,
};
export const Story5 = {
  name: 'Underline Link',
  render: () => <UnderlineLink />,
};
