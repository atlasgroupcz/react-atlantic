import { RefObject, useEffect, useRef } from 'react';

export type UseOutsideClickHandler = (e: Event) => void;
export type UseOutsideClickValue<T extends HTMLElement> = RefObject<T>;

/**
 * Hook for handling clicks outside of specified element
 * @param handler Callback for when the event is triggered, **memoize this**, updating the callback resets the event listener.
 */
export const useOutsideClick = <T extends HTMLElement>(
    handler: UseOutsideClickHandler
): UseOutsideClickValue<T> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside: EventListener = (event) => {
            const element = ref?.current;

            if (element) {
                if (!element.contains?.(event?.target as Node)) {
                    handler(event);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handler]);

    return ref;
};
