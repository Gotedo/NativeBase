import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './basic';
import { Example as HiddenFromAndToBreakpoints } from './hiddenFromAndToBreakpoints';
import { Example as HiddenOnColorModes } from './hiddenOnColorModes';
import { Example as HiddenOnlyOnBreakPoints } from './hiddenOnlyOnBreakPoints';
import { Example as HiddenOnPlatforms } from './hiddenOnPlatforms';

export default {
  title: 'Hidden',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'HiddenOnColorModes',
  render: () => <HiddenOnColorModes />,
};
export const Story3 = {
  name: 'HiddenFromAndToBreakpoints',
  render: () => <HiddenFromAndToBreakpoints />,
};
export const Story4 = {
  name: 'HiddenOnlyOnBreakPoints',
  render: () => <HiddenOnlyOnBreakPoints />,
};
export const Story5 = {
  name: 'HiddenOnPlatforms',
  render: () => <HiddenOnPlatforms />,
};
