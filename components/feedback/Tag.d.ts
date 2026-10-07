import * as React from 'react';
export interface TagProps {
  children?: React.ReactNode;
  /** Show an × remove button; called on click. */
  onRemove?: () => void;
  /** @default "jade" */
  tone?: 'jade' | 'gold' | 'neutral';
  style?: React.CSSProperties;
}
/**
 * Removable keyword/token chip in mono type.
 * @dsCard components/feedback/feedback.card.html
 */
export declare function Tag(props: TagProps): JSX.Element;
