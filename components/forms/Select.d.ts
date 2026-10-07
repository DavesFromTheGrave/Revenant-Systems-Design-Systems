import * as React from 'react';

export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  hint?: string;
  options: (string | SelectOption)[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  style?: React.CSSProperties;
  id?: string;
}
/**
 * Styled native select with a jade focus glow and gold caret.
 * @dsCard components/forms/forms.card.html
 */
export declare function Select(props: SelectProps): JSX.Element;
