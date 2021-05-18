import { useState } from 'react';
import { HTMLInputDefaultElementProps } from '../../../types';
import { useCallback } from 'react';
import {
    InputEventProps,
    ControllerInputProps,
    InputProps,
    StyledInputProps,
} from '../views/base/types';

type UseInputChangeType = (
    args: HTMLInputDefaultElementProps &
        Pick<InputEventProps, 'onChange'> &
        Pick<StyledInputProps, 'isDisabled'>
) => ControllerInputProps;

export const useInputChange: UseInputChangeType = ({
    defaultValue = '',
    isDisabled,
    onChange,
}) => {
    const [value, setValue] = useState<InputProps['value']>(defaultValue);

    const handleChange: InputProps['onChange'] = useCallback(
        (e): void => {
            if (!isDisabled) {
                const { value } = e.currentTarget;
                setValue(value);
                onChange?.(e);
            }
        },
        [onChange, isDisabled]
    );

    return { value, onChange: handleChange };
};
