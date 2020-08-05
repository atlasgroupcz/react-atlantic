import {
    AnchorHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
    InputHTMLAttributes,
    PropsWithRef,
} from 'react';

/**
 * Extracts props from an HTML element given its type
 */
export type ElementProps<T extends HTMLElement = HTMLElement> = PropsWithRef<
    DetailedHTMLProps<
        T extends HTMLInputElement
            ? InputHTMLAttributes<T>
            : T extends HTMLAnchorElement
            ? AnchorHTMLAttributes<T>
            : HTMLAttributes<T>,
        T
    >
>;
