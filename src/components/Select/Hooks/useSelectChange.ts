import { useCallback, useState } from 'react';
import { OptionType, SelectProps } from '../Types';
import { ValueType } from 'react-select';
import { ActionMeta } from 'react-select/src/types';

type UseSelectChangeValue = {
    value: ValueType<OptionType>;
    onChange: (
        value: ValueType<OptionType>,
        action?: ActionMeta<OptionType>
    ) => void;
};

type UseSelectChangeProps = {
    defaultValue?: ValueType<OptionType>;
    isDisabled?: Readonly<boolean>;
    onChange?: (
        value: ValueType<OptionType>,
        action?: ActionMeta<OptionType>
    ) => void;
};

type UseSelectChangeType = (args: UseSelectChangeProps) => UseSelectChangeValue;

export const useSelectChange: UseSelectChangeType = ({
    defaultValue,
    isDisabled,
    onChange,
}) => {
    const [value, setValue] = useState<SelectProps['value']>(defaultValue);

    const handleChange: UseSelectChangeValue['onChange'] = useCallback(
        (value, action): void => {
            if (!isDisabled) {
                setValue(value);

                onChange?.(value, action);
            }
        },
        [onChange, isDisabled]
    );

    return { value, onChange: handleChange };
};
