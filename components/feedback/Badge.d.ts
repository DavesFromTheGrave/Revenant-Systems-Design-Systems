import * as React from 'react';
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  variant?: 'neutral' | 'jade' | 'gold' | 'danger' | 'warning';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a glowing status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}
/**
 * Small uppercase status/label chip.
 * @dsCard components/feedback/feedback.card.html
 */
export declare function Badge(props: BadgeProps): JSX.Element;
