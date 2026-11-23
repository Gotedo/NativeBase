import React from 'react';
import {
  NativeBaseProvider,
  Box,
  VStack,
  Heading,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Slider,
  Switch,
  Modal,
  Text,
  CheckIcon,
} from 'native-base';

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('one');
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p={6}>
        <VStack space={3}>
          <Heading>NativeBase · React Native 0.88</Heading>
          <Input accessibilityLabel="Name" placeholder="Name" />
          <Checkbox value="accepted">Accept terms</Checkbox>
          <Radio.Group
            name="choice"
            accessibilityLabel="Choice"
            defaultValue="one"
          >
            <Radio value="one">One</Radio>
            <Radio value="two">Two</Radio>
          </Radio.Group>
          <Select
            accessibilityLabel="Selection"
            selectedValue={selected}
            onValueChange={setSelected}
          >
            <Select.Item label="One" value="one" />
            <Select.Item label="Two" value="two" />
          </Select>
          <Slider accessibilityLabel="Volume" defaultValue={40}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
          <Switch accessibilityLabel="Notifications" />
          <CheckIcon accessibilityLabel="SVG icon" />
          <Button onPress={() => setOpen(true)}>Open modal</Button>
        </VStack>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Fabric overlay</Modal.Header>
            <Modal.Body>
              <Text>Inputs, SVG, safe areas and overlays are mounted.</Text>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Box>
    </NativeBaseProvider>
  );
}
