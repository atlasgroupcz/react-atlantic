import { InputProps } from '../../Input';
import { useTransferContext } from '../context';
import { createInputPlaceholder } from '../utils';

export const useHiddenInputValue = (
    fallback: string = 'Vyberte'
): InputProps['value'] => {
    const { value } = useTransferContext();
    const text = createInputPlaceholder(value);
    return text ?? fallback;
};
