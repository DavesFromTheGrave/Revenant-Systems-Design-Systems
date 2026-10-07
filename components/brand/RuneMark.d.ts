import * as React from 'react';
export interface RuneMarkProps {
  /** Glyph to render (rune/letter). Ignored if `src` is set. @default "ᛉ" */
  rune?: React.ReactNode;
  /** Image source for a bespoke sigil (e.g. a /assets/brand PNG). */
  src?: string;
  /** Size in px. @default 96 */
  size?: number;
  /** @default "jade" */
  tone?: 'jade' | 'gold';
  /** Draw the Metatron hexagon frame. @default true */
  frame?: boolean;
  /** Apply the glow. @default true */
  glow?: boolean;
  /** Slowly rotate the frame (loader use). */
  spin?: boolean;
  style?: React.CSSProperties;
}
/**
 * Framed brand sigil — Algiz rune (or any glyph/image) in a Metatron hexagon with jade glow.
 * Use for section marks, loaders, empty states, watermarks.
 * @dsCard components/brand/brand.card.html
 */
export declare function RuneMark(props: RuneMarkProps): JSX.Element;
