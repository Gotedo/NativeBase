import React from 'react';
import { IconButton, CloseIcon, HStack } from 'native-base';
export const Example = () => {
  return (
    <HStack space="md">
      <IconButton
        accessibilityLabel="Close"
        icon={<CloseIcon />}
        size="sm"
        color="teal.200"
      />
      <IconButton
        accessibilityLabel="Close"
        icon={<CloseIcon />}
        size="md"
        color="red.200"
      />
      <IconButton
        accessibilityLabel="Close"
        icon={<CloseIcon />}
        size="lg"
        color="blue.200"
      />
    </HStack>
  );
};
