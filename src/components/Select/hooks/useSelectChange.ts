import { useCallback, useState } from 'react';
import { OptionType, SelectProps } from '../types';
import { ActionMeta, ValueType } from 'react-select/src/types';

type UseSelectArgs = {
    onChange?: (value: OptionType, action?: ActionMeta<OptionType>) => void;
};
type UseSelectChangeProps<T extends OptionType> = SelectProps<T> &
    UseSelectArgs;

export const useSelectChange = <T extends OptionType>({
    onChange,
    isDisabled = false,
    defaultValue,
    ...props
}: UseSelectChangeProps<T>): SelectProps<T> => {
    const [value, setValue] = useState<ValueType<T>>(defaultValue);

    const handleChange = useCallback<NonNullable<SelectProps<T>['onChange']>>(
        (value, action) => {
            if (!isDisabled) {
                setValue(value);
                onChange?.(value, action ?? { action: 'select-option' });
            }
        },
        [isDisabled, onChange]
    );

    return { value, onChange: handleChange, ...props };
};
