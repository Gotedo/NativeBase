import React from 'react';
import type { Preview } from '@storybook/react-native';
import { ControlsProvider } from './controls';
const preview: Preview = {
  decorators: [
    (Story) => (
      <ControlsProvider>
        <Story />
      </ControlsProvider>
    ),
  ],
  parameters: { controls: { expanded: true } },
};
export default preview;
