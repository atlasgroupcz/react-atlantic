import { MutableRefObject, useCallback, useRef } from 'react';
import { handleParentRef } from '../../../../../utils';

type UseInputDefaultProps = {
    ref:
        | MutableRefObject<HTMLInputElement | null>
        | ((instance: HTMLInputElement | null) => void)
        | null;
};

type UseInputDefault = (
    props: UseInputDefaultProps
) => {
    setInputFocus: () => void;
    handleSetRef: (instance: HTMLInputElement | null) => void;
};

export const useInputDefault: UseInputDefault = ({ ref }) => {
    let inputRef = useRef<HTMLInputElement | null>(null);

    const setInputFocus: ReturnType<
        UseInputDefault
    >['setInputFocus'] = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    const handleSetRef: ReturnType<
        UseInputDefault
    >['handleSetRef'] = useCallback(
        (instance: HTMLInputElement | null): void => {
            inputRef.current = instance;
            handleParentRef(ref, instance);
        },
        [ref]
    );

    return {
        setInputFocus,
        handleSetRef,
    };
};
