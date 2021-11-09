import { InputProps } from '../../Input/types';
import { useTransferContext } from '../context';
import { createInputPlaceholder } from '../utils';

export const useHiddenInputValue = (
    fallback: string = 'Vyberte'
): InputProps['value'] => {
    const {
        createInputPlaceholder: createInputPlaceholderProp,
    } = useTransferContext();

    const { value } = useTransferContext();
    const text = createInputPlaceholderProp
        ? createInputPlaceholderProp(value)
        : createInputPlaceholder(value);
    return text ?? fallback;
};
