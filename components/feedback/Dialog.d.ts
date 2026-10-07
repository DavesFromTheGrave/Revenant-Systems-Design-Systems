import * as React from 'react';
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  /** Footer node — typically Buttons. */
  footer?: React.ReactNode;
  /** @default 460 */
  width?: number;
  /** Rim/glow color. @default "jade" */
  tone?: 'jade' | 'gold' | 'danger';
  style?: React.CSSProperties;
}
/**
 * Modal dialog on a blurred void scrim, click-scrim-to-close, tone-keyed rim + glow.
 * @dsCard components/feedback/feedback.card.html
 */
export declare function Dialog(props: DialogProps): JSX.Element;
