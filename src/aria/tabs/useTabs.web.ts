import type { AriaTabListProps } from '@react-types/tabs';
import type { TabListState } from '@react-stately/tabs';
import type { RefObject } from 'react';
import { useTabList, useTabPanel } from '@react-aria/tabs';
import { mapDomPropsToRN } from '../utils';

export function useTabs<T>(
  props: AriaTabListProps<T>,
  state: TabListState<T>,
  ref: RefObject<HTMLElement | null>,
  panelRef: RefObject<HTMLElement | null>
) {
  const { tabListProps } = useTabList(props, state, ref);
  const { tabPanelProps } = useTabPanel({}, state, panelRef);
  return {
    tabListProps: mapDomPropsToRN(tabListProps),
    tabPanelProps: mapDomPropsToRN(tabPanelProps),
  };
}
