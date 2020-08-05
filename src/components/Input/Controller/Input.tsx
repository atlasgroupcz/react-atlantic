import { ControllerInputProps, InputEventProps, InputProps } from '../types';
import { HTMLInputDefaultElementProps } from '../../../types';
import React, {
    EventHandler,
    FormEvent,
    SyntheticEvent,
    useCallback,
    useState,
} from 'react';
import { InputView } from '../View';

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
