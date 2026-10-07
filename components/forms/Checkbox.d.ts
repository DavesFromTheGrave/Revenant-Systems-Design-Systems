import * as React from 'react';
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
/**
 * Carved checkbox — jade marble fill + check when on. Controlled or uncontrolled.
 * @dsCard components/forms/forms.card.html
 */
export declare function Checkbox(props: CheckboxProps): JSX.Element;
