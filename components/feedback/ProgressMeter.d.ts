import * as React from 'react';
export interface ProgressMeterProps {
  /** Current value. */
  value: number;
  /** Max value. @default 1 */
  max?: number;
  label?: string;
  /** Fill color. Use "ember" for malice/danger metrics. @default "jade" */
  tone?: 'jade' | 'gold' | 'ember';
  /** Show the numeric readout (2-dp when max=1). @default true */
  showValue?: boolean;
  style?: React.CSSProperties;
}
/**
 * Metric bar for runtime signals (coherence, entropy, malice). Glowing jade/ember fill.
 * @dsCard components/feedback/feedback.card.html
 */
export declare function ProgressMeter(props: ProgressMeterProps): JSX.Element;
