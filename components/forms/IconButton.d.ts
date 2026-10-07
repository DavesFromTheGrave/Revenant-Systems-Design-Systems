import * as React from 'react';

export interface IconButtonProps {
  /** The icon node (e.g. a Lucide <svg>). */
  children?: React.ReactNode;
  /** @default "ghost" */
  variant?: 'ghost' | 'solid' | 'jade';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also the tooltip). */
  label?: string;
  disabled?: boolean;
  /** Toggled/selected state — lights the jade rim. */
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Icon-only control. Pass a Lucide icon as children and an accessible `label`.
 * @dsCard components/forms/forms.card.html
 */
export declare function IconButton(props: IconButtonProps): JSX.Element;
