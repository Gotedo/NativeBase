import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import { NativeBaseProvider } from '../core/NativeBaseProvider';
import { Checkbox, Slider } from '../components/primitives';
import { Tabs } from '../components/composites/Tabs';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <NativeBaseProvider
    initialWindowMetrics={{
      frame: { x: 0, y: 0, width: 320, height: 640 },
      insets: { top: 0, bottom: 0, left: 0, right: 0 },
    }}
  >
    {children}
  </NativeBaseProvider>
);

it('keeps a read-only native checkbox unchanged when pressed', () => {
  const onChange = jest.fn();
  const screen = render(
    <Checkbox value="locked" isReadOnly onChange={onChange}>
      Locked
    </Checkbox>,
    { wrapper }
  );
  fireEvent.press(screen.getByRole('checkbox'));
  expect(onChange).not.toHaveBeenCalled();
  expect(screen.getByRole('checkbox').props.accessibilityState.checked).toBe(
    false
  );
});

it('increments and decrements a slider through native accessibility actions', () => {
  const onChange = jest.fn();
  const screen = render(
    <Slider
      minValue={0}
      maxValue={100}
      defaultValue={40}
      step={10}
      onChange={onChange}
    >
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>,
    { wrapper }
  );
  const thumb = screen.getByRole('adjustable');
  expect(thumb.props.accessibilityValue.now).toBe(40);
  expect(typeof thumb.props.onAccessibilityAction).toBe('function');
  // Accessibility actions bypass the touch responder negotiation in native views.
  act(() =>
    thumb.props.onAccessibilityAction({
      nativeEvent: { actionName: 'increment' },
    })
  );
  expect(onChange).toHaveBeenLastCalledWith(50);
  act(() =>
    screen
      .getByRole('adjustable')
      .props.onAccessibilityAction({ nativeEvent: { actionName: 'decrement' } })
  );
  expect(onChange).toHaveBeenLastCalledWith(40);
});

it('selects a native tab using the current collection state API', () => {
  const onChange = jest.fn();
  const screen = render(
    <Tabs onChange={onChange}>
      <Tabs.Bar>
        <Tabs.Tab>First</Tabs.Tab>
        <Tabs.Tab>Second</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>First panel</Tabs.View>
        <Tabs.View>Second panel</Tabs.View>
      </Tabs.Views>
    </Tabs>,
    { wrapper }
  );
  fireEvent.press(screen.getByText('Second'));
  expect(onChange).toHaveBeenLastCalledWith(1);
});
