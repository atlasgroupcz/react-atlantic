import {
    UseInputDefault,
    useInputDefault,
    UseInputDefaultProps,
} from './useInputDefault';

type UseInputFloatingLabelProps = {} & UseInputDefaultProps;
type UseInputFloatingLabel = (
    props: UseInputFloatingLabelProps
) => ReturnType<UseInputDefault>;

export const useInputFloatingLabel: UseInputFloatingLabel = ({ ref }) => {
    const { handleSetRef, setInputFocus } = useInputDefault({ ref });

    return { handleSetRef, setInputFocus };
};
