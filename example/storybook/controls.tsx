import React from 'react';
import { View, Text, TextInput, Switch, Pressable } from 'react-native';

type Control = {
  label: string;
  kind: 'text' | 'number' | 'boolean' | 'select';
  initial: unknown;
  options?: unknown[];
};
type Controls = {
  values: Record<string, unknown>;
  register: (control: Control) => void;
};
const Context = React.createContext<Controls>({
  values: {},
  register: () => {},
});

/** Native controls for demos migrated from the retired Storybook knobs addon. */
export function ControlsProvider({ children }: { children: React.ReactNode }) {
  const [controls, setControls] = React.useState<Record<string, Control>>({});
  const [values, setValues] = React.useState<Record<string, unknown>>({});
  const register = React.useCallback((control: Control) => {
    setControls((previous) =>
      JSON.stringify(previous[control.label]) === JSON.stringify(control)
        ? previous
        : { ...previous, [control.label]: control }
    );
  }, []);
  const update = (label: string, value: unknown) =>
    setValues((previous) => ({ ...previous, [label]: value }));
  return (
    <Context.Provider value={{ values, register }}>
      {children}
      <View style={{ padding: 12, gap: 8 }}>
        {Object.values(controls).map((control) => {
          const value = values[control.label] ?? control.initial;
          return (
            <View key={control.label} style={{ gap: 4 }}>
              <Text>{control.label}</Text>
              {control.kind === 'boolean' ? (
                <Switch
                  value={Boolean(value)}
                  onValueChange={(v) => update(control.label, v)}
                />
              ) : control.kind === 'select' ? (
                <View
                  style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}
                >
                  {control.options?.map((option) => (
                    <Pressable
                      key={String(option)}
                      onPress={() => update(control.label, option)}
                      accessibilityRole="button"
                    >
                      <Text
                        style={{
                          fontWeight: value === option ? 'bold' : 'normal',
                        }}
                      >
                        {String(option)}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              ) : (
                <TextInput
                  value={String(value)}
                  onChangeText={(v) =>
                    update(
                      control.label,
                      control.kind === 'number' ? Number(v) : v
                    )
                  }
                />
              )}
            </View>
          );
        })}
      </View>
    </Context.Provider>
  );
}
function useControl<T>(control: Control): T {
  const { values, register } = React.useContext(Context);
  const serialized = JSON.stringify(control);
  React.useEffect(() => {
    register(JSON.parse(serialized));
  }, [serialized, register]);
  return (values[control.label] ?? control.initial) as T;
}
export const boolean = (label: string, initial: boolean) =>
  useControl<boolean>({ label, initial, kind: 'boolean' });
export const text = (label: string, initial: string) =>
  useControl<string>({ label, initial, kind: 'text' });
export const color = text;
export const number = (label: string, initial: number, _options?: unknown) =>
  useControl<number>({ label, initial, kind: 'number' });
export const select = <T,>(
  label: string,
  options: T[] | Record<string, T>,
  initial: T
) =>
  useControl<T>({
    label,
    initial,
    kind: 'select',
    options: Array.isArray(options) ? options : Object.values(options),
  });
