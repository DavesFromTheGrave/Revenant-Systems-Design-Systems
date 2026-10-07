import * as React from 'react';
export interface AvatarProps {
  src?: string;
  name?: string;
  /** Show a rune glyph instead of initials. */
  rune?: React.ReactNode;
  /** Diameter in px. @default 40 */
  size?: number;
  /** Ring color. @default "jade" */
  tone?: 'jade' | 'gold';
  /** Add a live jade glow ring. */
  live?: boolean;
  style?: React.CSSProperties;
}
/**
 * Ring-framed identity — image, initials, or a rune, with an optional live glow.
 * @dsCard components/layout/layout.card.html
 */
export declare function Avatar(props: AvatarProps): JSX.Element;
