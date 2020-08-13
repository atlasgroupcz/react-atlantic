import { useCallback, useState } from 'react';
import { OptionType, SelectProps } from '../types';
import { Props as ReactSelectProps, ValueType } from 'react-select';

interface UseSelectChangeValue extends ReactSelectProps {
    value: ValueType<OptionType>;
}

interface UseSelectChangeProps extends ReactSelectProps {
    defaultValue?: ValueType<OptionType>;
    isDisabled?: Readonly<boolean>;
}

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
