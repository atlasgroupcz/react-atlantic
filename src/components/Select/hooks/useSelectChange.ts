import { useCallback, useState } from 'react';
import { OptionType, SelectProps } from '../types';
import { Props as ReactSelectProps, ValueType } from 'react-select';
import { ActionMeta } from 'react-select/src/types';

export interface UseSelectChangeValue extends ReactSelectProps {
    value: ValueType<OptionType>;
    onChange?: (
        value: ValueType<OptionType>,
        action?: ActionMeta<OptionType>
    ) => void;
}

interface UseSelectChangeProps extends ReactSelectProps {
    defaultValue?: ValueType<OptionType>;
    isDisabled?: Readonly<boolean>;
    onChange?: (
        value: ValueType<OptionType>,
        action?: ActionMeta<OptionType>
    ) => void;
}

type UseSelectChangeType = (
    props?: UseSelectChangeProps
) => UseSelectChangeValue;

export const useSelectChange: UseSelectChangeType = (props?) => {
    const [value, setValue] = useState<SelectProps['value']>(
        props?.defaultValue
    );

    const handleChange: UseSelectChangeValue['onChange'] = useCallback(
        (value, action?): void => {
            if (!props?.isDisabled) {
                setValue(value);

                props?.onChange?.(value, action || { action: 'select-option' });
            }
        },
        [props?.onChange, props?.isDisabled]
    );

    return { value, onChange: handleChange };
};
