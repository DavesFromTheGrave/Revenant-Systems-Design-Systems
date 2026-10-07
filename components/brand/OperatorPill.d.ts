import * as React from 'react';
export interface OperatorPillProps {
  /** RAGE operator. @default "omega" */
  operator?: 'containment' | 'omega' | 'chi' | 'sigma' | 'xi' | 'algiz' | string;
  /** Pipeline state — active glyph breathes. @default "idle" */
  state?: 'idle' | 'active' | 'done' | 'flagged';
  /** Show the operator name next to the glyph. @default true */
  showName?: boolean;
  style?: React.CSSProperties;
}
/**
 * The RAGE operator chip — mono glyph (Ω Χ Σ Ξ ᛉ) + name, with runtime state. Brand-signature.
 * @dsCard components/brand/brand.card.html
 * @startingPoint section="Brand" subtitle="RAGE operator pipeline chips" viewport="700x160"
 */
export declare function OperatorPill(props: OperatorPillProps): JSX.Element;
