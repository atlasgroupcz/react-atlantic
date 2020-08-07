import { RefType } from '../types/Ref';

export const handleParentRef = <T extends HTMLElement>(
    ref: RefType<T>,
    instance: T | null
) => {
    if (ref instanceof Function) {
        ref(instance);
    } else {
        if (ref) {
            ref.current = instance;
        }
    }
};
