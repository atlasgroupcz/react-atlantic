import React, { useState } from 'react';
import { HTMLInputDefaultElementProps } from '../../../types';
import { ControllerInputProps, InputEventProps, InputProps } from '../types';
import { useCallback } from 'react';

type UseInputChangeType = (
    args: HTMLInputDefaultElementProps & Pick<InputEventProps, 'onChange'>
) => ControllerInputProps;

export const useInputChange: UseInputChangeType = ({
    defaultValue = '',
    onChange,
}) => {
    const [value, setValue] = useState<InputProps['value']>(defaultValue);

    const handleChange: InputProps['onChange'] = useCallback(
        (e): void => {
            const { value } = e.currentTarget;
            setValue(value);
            onChange?.(e);
        },
        [onChange]
    );

    return { value, onChange: handleChange };
};
