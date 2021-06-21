import { useCallback, useEffect, useState } from 'react';
import { UseRadioArgs } from '../types/Radio.type';

export type UseRadioButtonWithStateValue = {} & UseRadioButtonWithStateProps &
    UseRadioArgs;

export type UseRadioButtonWithStateProps = {
    defaultValue?: string;
} & Omit<UseRadioArgs, 'value'>;

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
        const isDisabled = rest.values.find(
            (item) => item.value === defaultValue
        )?.isDisabled;

        if (typeof defaultValue !== 'undefined' && !isDisabled) {
            setValue(defaultValue);
        }
    }, []);

    const onChange = useCallback<UseRadioButtonWithStateProps['onChange']>(
        (event) => {
            const newValue = event.currentTarget.value;
            const isDisabled = rest.values.find(
                (item) => item.value === event.currentTarget.value
            )?.isDisabled;

            if (newValue !== value && !isDisabled) {
                setValue(newValue);
                PropsOnChange?.(event);
            }
        },
        [value, PropsOnChange]
    );

    return { onChange, value, ...rest };
};
