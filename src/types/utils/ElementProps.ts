import {
    AnchorHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
    InputHTMLAttributes,
    PropsWithRef,
    TextareaHTMLAttributes,
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
            : T extends HTMLTextAreaElement
            ? TextareaHTMLAttributes<T>
            : HTMLAttributes<T>,
        T
    >
>;
