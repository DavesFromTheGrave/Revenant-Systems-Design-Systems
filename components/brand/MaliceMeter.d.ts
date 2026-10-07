import * as React from 'react';
export interface MaliceMeterProps {
  /** Derived Malice metric, 0–1. */
  value: number;
  /** Overall px size (height is ~0.6×). @default 160 */
  size?: number;
  /** @default "Malice" */
  label?: string;
  style?: React.CSSProperties;
}
/**
 * Semicircular gauge for the Malice safety metric. Arc + needle shift jade→amber→ember with risk.
 * @dsCard components/brand/brand.card.html
 */
export declare function MaliceMeter(props: MaliceMeterProps): JSX.Element;
