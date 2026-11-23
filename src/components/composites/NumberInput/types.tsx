import type { JSX } from 'react';
import type { IInputProps, IStackProps } from '../../primitives';
import type { InterfaceInputProps } from '../../primitives/Input/types';
import type { InterfaceBoxProps } from '../../primitives/Box/types';
import type { CustomProps } from '../../../components/types';

export type INumberInputProps = (Omit<
  InterfaceInputProps,
  keyof InterfaceBoxProps | 'value' | 'defaultValue' | 'onChange'
> &
  InterfaceBoxProps<INumberInputProps> & {
    value?: number | string;
    defaultValue?: number | string;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    isReadOnly?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    keepWithinRange?: boolean;
    allowMouseWheel?: boolean;
    clampValueOnBlur?: boolean;
    focusInputOnChange?: boolean;
    getAriaValueText?: boolean;
    children?: JSX.Element[] | JSX.Element;
  }) &
  CustomProps<'NumberInput'>;

export type INumberInputFieldProps = IInputProps & {};
export type INumberInputSteppersProps = IStackProps & {
  children: JSX.Element[] | JSX.Element;
};
export type INumberInputStepperProps =
  InterfaceBoxProps<INumberInputStepperProps> & {
    isDisabled?: boolean;
    _disabled?: Omit<INumberInputStepperProps, '_disabled'>;
    _active?: Omit<INumberInputStepperProps, '_active'>;
  };
export type INumberInputContext = {
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  clampValueOnBlur?: boolean;
  focusInputOnChange?: boolean;
  keepWithinRange?: boolean;
  numberInputValue?: number;
  value?: number | string;
  handleChange?: (value: number) => void;
  handleChangeWithoutCheck?: (value: number) => void;
  numberInputStepper?: any;
  setNumberInputStepper?: any;
  isControlled?: boolean;
};
