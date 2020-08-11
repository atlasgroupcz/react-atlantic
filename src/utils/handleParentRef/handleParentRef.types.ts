import { RefType } from '../../types/Ref';

export type HandleParentRef = <T extends HTMLElement>(
    ref: RefType<T>,
    instance: T | null
) => void;
