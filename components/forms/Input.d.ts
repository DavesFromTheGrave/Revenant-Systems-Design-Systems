import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  /** Error message — turns the field ember and shows below. */
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Inset text field on the void with a jade focus glow.
 * @dsCard components/forms/forms.card.html
 */
export declare function Input(props: InputProps): JSX.Element;
