import { FormEvent, useCallback, useEffect, useState } from 'react';
import { OptionType } from '../../Select';

export type UseRadioButtonWithStateValue = {
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
} & Omit<UseRadioButtonWithStateProps, 'onChange'>;

export type UseRadioButtonWithStateProps = {
    values: Array<OptionType>;
    groupName: string;
    onChange?: (newValue: string) => void;
    defaultValue?: string;
    isFullWidth?: boolean;
};

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

    const onChange = useCallback<UseRadioButtonWithStateValue['onChange']>(
        (event) => {
            const newValue = event.currentTarget.value;

            if (newValue !== value) {
                setValue(newValue);
                PropsOnChange?.(newValue);
            }
        },
        [value, PropsOnChange]
    );

    return { onChange, value, ...rest };
};
