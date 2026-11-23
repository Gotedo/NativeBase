import React from 'react';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Colors } from './Colors';
import { Example as Sizes } from './Sizes';
import { Example as Label } from './Label';
import { Example as Thickness } from './Thickness';
import { Example as Indeterminate } from './Indeterminate';
import { Example as TrackColor } from './TrackColor';
import { Example as MinMax } from './MinMax';
import { Example as ColorScheme } from './ColorScheme';

export default {
  title: 'CircularProgress',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Basic', render: () => <Basic /> };
export const Story2 = { name: 'ColorScheme', render: () => <ColorScheme /> };
export const Story3 = { name: 'Colors', render: () => <Colors /> };
export const Story4 = { name: 'TrackColor', render: () => <TrackColor /> };
export const Story5 = { name: 'Label', render: () => <Label /> };
export const Story6 = { name: 'Sizes', render: () => <Sizes /> };
export const Story7 = { name: 'Thickness', render: () => <Thickness /> };
export const Story8 = { name: 'Min and Max', render: () => <MinMax /> };
export const Story9 = {
  name: 'Indeterminate',
  render: () => <Indeterminate />,
};
