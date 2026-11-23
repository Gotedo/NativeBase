import React from 'react';
import { Tabs } from '../../../../../../src/components/composites/Tabs';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>One</Tabs.Tab>
        <Tabs.Tab>Two</Tabs.Tab>
        <Tabs.Tab>Three</Tabs.Tab>
        {/* <Tabs.Tab>Four</Tabs.Tab> */}
      </Tabs.Bar>
    </Tabs>
  );
};
