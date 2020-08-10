import { MutableRefObject } from 'react';

export type RefType<T extends unknown> =
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null;
