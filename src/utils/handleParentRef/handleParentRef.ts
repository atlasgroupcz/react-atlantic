import { HandleParentRef } from './handleParentRef.types';

export const handleParentRef: HandleParentRef = (ref, instance) => {
    if (typeof ref === 'function') {
        ref(instance);
    } else {
        if (ref) {
            ref.current = instance;
        }
    }
};
