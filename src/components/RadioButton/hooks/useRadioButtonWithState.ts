import { useCallback, useEffect, useState } from 'react';
import { UseRadioButtonArgs } from '../types';

export type UseRadioButtonWithStateValue = {} & UseRadioButtonWithStateProps &
    UseRadioButtonArgs;

export type UseRadioButtonWithStateProps = {
    defaultValue?: string;
} & Omit<UseRadioButtonArgs, 'value'>;

export type UseRadioButtonWithStateType = (
    props: UseRadioButtonWithStateProps
) => UseRadioButtonWithStateValue;

export const useRadioButtonWithState: UseRadioButtonWithStateType = ({
    defaultValue = '',
    onChange: PropsOnChange,
    ...rest
}) => {
    const [value, setValue] = useState<UseRadioButtonWithStateValue['value']>(
        defaultValue
    );

    useEffect(() => {
        if (typeof defaultValue !== 'undefined') {
            setValue(defaultValue);
        }
    }, []);

    const onChange = useCallback<UseRadioButtonWithStateProps['onChange']>(
        (event) => {
            const newValue = event.currentTarget.value;

            if (newValue !== value) {
                setValue(newValue);
                PropsOnChange?.(event);
            }
        },
        [value, PropsOnChange]
    );

    return { onChange, value, ...rest };
};
