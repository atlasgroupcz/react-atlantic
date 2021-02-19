import { useState } from 'react';
import { HTMLInputDefaultElementProps } from '../../../types';
import { useCallback } from 'react';
import {
    InputEventProps,
    ControllerInputProps,
    StyledInputProps,
    InputProps,
} from '../view/base/types';
import { IconProps } from '../../Icon';

type UseInputChangeType = (
    args: HTMLInputDefaultElementProps &
        Pick<InputEventProps, 'onChange'> &
        Pick<StyledInputProps, 'isDisabled'> & {
            onClear?: () => void;
        }
) => ControllerInputProps;

export const useInputClearable: UseInputChangeType = ({
    defaultValue = '',
    isDisabled,
    onChange,
    onClear,
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

    const handleClick: IconProps['onClick'] = useCallback((): void => {
        if (!isDisabled) {
            setValue(``);
            onClear?.();
        }
    }, [onClear, isDisabled]);

    return { value, onChange: handleChange, onClick: handleClick };
};
