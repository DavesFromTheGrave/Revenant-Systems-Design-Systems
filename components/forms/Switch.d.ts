import * as React from 'react';
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  /** Receives the next boolean value. */
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
/**
 * Sliding toggle — jade current + glow when on. Controlled or uncontrolled.
 * @dsCard components/forms/forms.card.html
 */
export declare function Switch(props: SwitchProps): JSX.Element;
