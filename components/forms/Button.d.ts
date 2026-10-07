import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  /** Stretch to container width. */
  full?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Forged-metal action control for Revenant Systems.
 * Jade = primary action, Gold = secondary/premium, Ghost = tertiary, Danger = destructive/veto.
 * @dsCard components/forms/forms.card.html
 * @startingPoint section="Forms" subtitle="Primary / secondary / ghost / danger buttons" viewport="700x150"
 */
export declare function Button(props: ButtonProps): JSX.Element;
