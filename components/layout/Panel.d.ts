import * as React from 'react';
export interface PanelProps {
  title?: string;
  /** Gold engraved eyebrow above the title. */
  eyebrow?: string;
  /** Right-aligned header actions (e.g. IconButtons). */
  actions?: React.ReactNode;
  children?: React.ReactNode;
  /** A faint rune/glyph watermark (e.g. "ᛉ"). */
  rune?: React.ReactNode;
  /** Body padding in px. @default 20 */
  padding?: number;
  style?: React.CSSProperties;
}
/**
 * Titled section container with an engraved eyebrow header and optional rune watermark.
 * @dsCard components/layout/layout.card.html
 */
export declare function Panel(props: PanelProps): JSX.Element;
