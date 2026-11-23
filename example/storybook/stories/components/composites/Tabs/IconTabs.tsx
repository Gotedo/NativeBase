import React from 'react';
import { Box } from 'native-base';
import { Tabs } from '../../../../../../src/components/composites/Tabs';

export const Example = () => {
  return (
    <Box width="100%" p={3}>
      <Tabs>
        <Tabs.Bar>
          <Tabs.Tab>
            <Tabs.Icon />
            Home
          </Tabs.Tab>
          <Tabs.Tab>
            <Tabs.Icon name="book" />
            Bookmarks
          </Tabs.Tab>
          <Tabs.Tab>
            <Tabs.Icon name="camera" />
            Camera
          </Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>Home</Tabs.View>
          <Tabs.View>Bookmarks</Tabs.View>
          <Tabs.View>Camera</Tabs.View>
        </Tabs.Views>
      </Tabs>
    </Box>
  );
};
