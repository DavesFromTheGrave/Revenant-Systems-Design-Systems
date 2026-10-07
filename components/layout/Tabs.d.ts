import * as React from 'react';
export interface TabItem { value: string; label: string; }
export interface TabsProps {
  tabs: (string | TabItem)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
/**
 * Underlined tab bar with a glowing jade indicator. Controlled or uncontrolled.
 * @dsCard components/layout/layout.card.html
 */
export declare function Tabs(props: TabsProps): JSX.Element;
