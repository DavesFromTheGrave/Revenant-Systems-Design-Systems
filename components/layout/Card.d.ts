import * as React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Rim/glow color when lit. @default "jade" */
  tone?: 'jade' | 'gold';
  /** Always show the lit rim + glow. */
  active?: boolean;
  /** Lift + light on hover; sets pointer cursor. */
  interactive?: boolean;
  /** Inner padding in px. @default 20 */
  padding?: number;
}
/**
 * Raised dark surface — the base container. Hairline border, cold shadow, edge bevel.
 * @dsCard components/layout/layout.card.html
 * @startingPoint section="Layout" subtitle="Base card surface with jade/gold rim" viewport="700x220"
 */
export declare function Card(props: CardProps): JSX.Element;
