import { useCallback } from 'react';
import { OptionType, SelectProps } from '../types';
import { ActionMeta } from 'react-select/src/types';

type UseSelectArgs = {
    onChange?: (value: OptionType, action?: ActionMeta<OptionType>) => void;
};
type UseSelectChangeProps<T extends OptionType> = SelectProps<T> &
    UseSelectArgs;

export const useSelectChange = <T extends OptionType>({
    onChange,
    isDisabled = false,
    ...props
}: UseSelectChangeProps<T>): SelectProps<T> => {
    const handleChange = useCallback<NonNullable<SelectProps<T>['onChange']>>(
        (value, action) => {
            if (!isDisabled) {
                onChange?.(value, action ?? { action: 'select-option' });
            }
        },
        [isDisabled, onChange]
    );

    return { onChange: handleChange, ...props };
};
