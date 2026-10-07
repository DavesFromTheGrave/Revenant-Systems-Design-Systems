import * as React from 'react';
export interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  /** @default "top" */
  side?: 'top' | 'bottom' | 'left' | 'right';
  style?: React.CSSProperties;
}
/**
 * Hover tooltip — dark panel with a jade hairline + glow.
 * @dsCard components/feedback/feedback.card.html
 */
export declare function Tooltip(props: TooltipProps): JSX.Element;
