import { useState } from 'react';
import { HTMLInputDefaultElementProps } from '../../../types';
import { useCallback } from 'react';
import {
    InputEventProps,
    ControllerInputProps,
    InputProps,
} from '../view/base/types';

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
