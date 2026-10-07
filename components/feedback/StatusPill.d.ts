import * as React from 'react';
export interface StatusPillProps {
  /** Runtime state. @default "active" */
  status?: 'active' | 'live' | 'passed' | 'bypass' | 'flagged' | 'vetoed' | 'warning';
  /** Override the displayed text (defaults to the status word). */
  label?: string;
  /** Force the pulsing dot on/off (auto-on for active/live). */
  pulse?: boolean;
  style?: React.CSSProperties;
}
/**
 * Machine-honest runtime status pill — lowercase mono, glowing dot, pulses when live.
 * @dsCard components/feedback/feedback.card.html
 */
export declare function StatusPill(props: StatusPillProps): JSX.Element;
