import type { AriaTabListProps } from '@react-types/tabs';
import type { TabListState } from '@react-stately/tabs';

export function useTabs<T>(
  _props: AriaTabListProps<T>,
  _state: TabListState<T>,
  _ref: unknown,
  _panelRef: unknown
) {
  return { tabListProps: { role: 'tablist' }, tabPanelProps: {} };
}
