import { MutableRefObject } from 'react';

export type RefType<T extends HTMLElement> =
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null;
