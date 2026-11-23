import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as TooltipPositions } from './TooltipPositions';
import { Example as CustomTooltip } from './CustomTooltip';

export default {
  title: 'Tooltip',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = {
  name: 'Tooltip Positions',
  render: () => <TooltipPositions />,
};
export const Story3 = { name: 'Customizing', render: () => <CustomTooltip /> };
