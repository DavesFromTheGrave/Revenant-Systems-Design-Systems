import * as React from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}
/**
 * Inset multi-line field with jade focus glow.
 * @dsCard components/forms/forms.card.html
 */
export declare function Textarea(props: TextareaProps): JSX.Element;
