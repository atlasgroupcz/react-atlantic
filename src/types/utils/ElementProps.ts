import { DetailedHTMLProps, HTMLAttributes, PropsWithRef } from 'react';

/**
 * Extracts props from an HTML element given its type
 */
export type ElementProps = PropsWithRef<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>;
