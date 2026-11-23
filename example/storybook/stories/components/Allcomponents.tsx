import React from 'react';
//@ts-nocheck
//uncomment above line to test typing of components
import {
  Badge,
  IconButton,
  Alert,
  AspectRatio,
  Avatar,
  Breadcrumb,
  Card,
  Container,
  Divider,
  Kbd,
  Progress,
  Accordion,
  FormControl,
  Center,
  Square,
  Circle,
  Fade,
  ScaleFade,
  PresenceTransition,
  Slide,
  SlideFade,
  Popover,
  AlertDialog,
  Menu,
  SimpleGrid,
  Actionsheet,
  Fab,
  Modal,
  Backdrop,
  Tooltip,
} from 'native-base';

import {
  Text,
  Checkbox,
  Radio,
  Hidden,
  Button,
  Column,
  Row,
  Box,
  Stack,
  VStack,
  HStack,
  ZStack,
  Slider,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Image,
  Spinner,
  Heading,
  Flex,
  Switch,
  TextArea,
  Link,
  Select,
  Pressable,
  Overlay,
  Skeleton,
} from 'native-base';

export const Example = () => {
  return (
    <>
      <Input></Input>
      <Badge testID="component"></Badge>
      <IconButton testID="component"></IconButton>
      <Alert testID="component"></Alert>
      <AspectRatio testID="component"></AspectRatio>
      <Avatar testID="component"></Avatar>
      <Breadcrumb testID="component"></Breadcrumb>
      <Card testID="component"></Card>
      <Container testID="component"></Container>
      <Divider testID="component"></Divider>
      <Kbd testID="component"></Kbd>
      <Progress testID="component"></Progress>
      <Accordion testID="component"></Accordion>
      <Skeleton testID="component"></Skeleton>
      <FormControl testID="component"></FormControl>
      <Center testID="component"></Center>
      <Square testID="component"></Square>
      <Circle testID="component"></Circle>
      <Fade testID="component"></Fade>
      <ScaleFade testID="component"></ScaleFade>
      <PresenceTransition testID="component"></PresenceTransition>
      <Slide testID="component"></Slide>
      <SlideFade testID="component"></SlideFade>
      <Popover trigger={() => <Box testID="component"></Box>}>
        <Box testID="component"></Box>
      </Popover>
      <AlertDialog
        leastDestructiveRef={React.createRef()}
        testID="component"
      ></AlertDialog>
      <Menu testID="component" trigger={() => <Box></Box>}></Menu>
      <SimpleGrid testID="component"></SimpleGrid>
      <Actionsheet testID="component"></Actionsheet>
      <Fab testID="component"></Fab>
      <Modal testID="component"></Modal>
      <Backdrop testID="component"></Backdrop>
      <Tooltip label="hell" testID="component">
        Hello
      </Tooltip>
      <Text testID="component"></Text>
      <Checkbox testID="component" value="1"></Checkbox>
      <Radio testID="component" value="1"></Radio>
      <Hidden>
        <Box testID="component"></Box>
      </Hidden>
      <Button testID="component"></Button>
      <Column testID="component"></Column>
      <Row testID="component"></Row>
      <Box testID="component"></Box>
      <Stack testID="component"></Stack>
      <VStack testID="component"></VStack>
      <HStack testID="component"></HStack>
      <ZStack testID="component"></ZStack>
      <Slider testID="component"></Slider>
      <Icon testID="component"></Icon>
      <Input testID="component"></Input>
      <InputGroup testID="component"></InputGroup>
      <InputLeftAddon testID="component"></InputLeftAddon>
      <InputRightAddon testID="component"></InputRightAddon>
      <Image testID="component"></Image>
      <Spinner testID="component"></Spinner>
      <Heading testID="component"></Heading>
      <Flex testID="component"></Flex>
      <Switch testID="component"></Switch>
      <TextArea testID="component"></TextArea>
      <Link testID="component"></Link>
      <Select testID="component"></Select>
      <Pressable testID="component"></Pressable>
      <Overlay></Overlay>
    </>
  );
};
