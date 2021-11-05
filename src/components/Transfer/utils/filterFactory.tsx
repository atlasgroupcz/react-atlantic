import { UseTransferOptionT } from '..';
import { InputDefaultProps } from '../../Input';

export const filterFactory = (value: InputDefaultProps['value']) => {
    const normalizedValue = (value as string)?.trim().toLowerCase();
    return (option: UseTransferOptionT) => {
        const normalizedOptionLabel =
            typeof option.label === 'string'
                ? option.label.toLocaleLowerCase()
                : option.label.props.children.toLocaleLowerCase();

        return normalizedOptionLabel.includes(normalizedValue);
    };
};
