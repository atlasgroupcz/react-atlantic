import { InputDefaultProps } from '../../Input';
import { UseTransferT } from '../hooks/useTransfer';

export const filterFactory = (value: InputDefaultProps['value']) => {
    const normalizedValue = (value as string)?.trim().toLowerCase();
    return (option: UseTransferT) => {
        const normalizedOptionLabel =
            typeof option.label === 'string'
                ? option.label.toLocaleLowerCase()
                : option.label.props.children.toLocaleLowerCase();

        return normalizedOptionLabel.includes(normalizedValue);
    };
};
