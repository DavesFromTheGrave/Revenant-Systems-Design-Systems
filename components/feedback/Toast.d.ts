import * as React from 'react';
export interface ToastProps {
  title?: string;
  message?: React.ReactNode;
  /** Left accent rail color. @default "jade" */
  tone?: 'jade' | 'gold' | 'danger' | 'warning';
  icon?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
/**
 * Notification card with a tone-keyed left rail and blurred panel background.
 * @dsCard components/feedback/feedback.card.html
 */
export declare function Toast(props: ToastProps): JSX.Element;
