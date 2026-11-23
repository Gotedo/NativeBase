import type { Node } from '@react-types/shared';
import type { TabListState } from '@react-stately/tabs';
import type { RefObject } from 'react';
import { useTab as useAriaTab } from '@react-aria/tabs';
import { useMapDomPropsToRN } from '../utils';

export function useTab<T>(
  props: { item: Node<T>; isDisabled?: boolean },
  state: TabListState<T>,
  ref: RefObject<HTMLElement | null>
) {
  const { tabProps } = useAriaTab(
    { key: props.item.key, isDisabled: props.isDisabled },
    state,
    ref
  );
  return { tabProps: useMapDomPropsToRN(tabProps, ref) };
}
