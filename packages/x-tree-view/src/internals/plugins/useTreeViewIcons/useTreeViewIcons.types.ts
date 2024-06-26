import * as React from 'react';
import { SlotComponentProps } from '@mui/base/utils';
import { TreeViewPluginSignature } from '../../models';
import { UseTreeViewNodesSignature } from '../useTreeViewNodes';
import { UseTreeViewSelectionSignature } from '../useTreeViewSelection';

export interface UseTreeViewIconsParameters {}

export type UseTreeViewIconsDefaultizedParameters = UseTreeViewIconsParameters;

interface UseTreeViewIconsSlots {
  /**
   * The default icon used to collapse the node.
   */
  collapseIcon?: React.ElementType;
  /**
   * The default icon used to expand the node.
   */
  expandIcon?: React.ElementType;
  /**
   * The default icon displayed next to an end node.
   * This is applied to all tree nodes and can be overridden by the TreeItem `icon` slot prop.
   */
  endIcon?: React.ElementType;
}

interface UseTreeViewIconsSlotProps {
  collapseIcon?: SlotComponentProps<'svg', {}, {}>;
  expandIcon?: SlotComponentProps<'svg', {}, {}>;
  endIcon?: SlotComponentProps<'svg', {}, {}>;
}

interface UseTreeViewIconsContextValue {
  icons: {
    slots: UseTreeViewIconsSlots;
    slotProps: UseTreeViewIconsSlotProps;
  };
}

export type UseTreeViewIconsSignature = TreeViewPluginSignature<{
  params: UseTreeViewIconsParameters;
  defaultizedParams: UseTreeViewIconsDefaultizedParameters;
  contextValue: UseTreeViewIconsContextValue;
  slots: UseTreeViewIconsSlots;
  slotProps: UseTreeViewIconsSlotProps;
  dependantPlugins: [UseTreeViewNodesSignature, UseTreeViewSelectionSignature];
}>;
