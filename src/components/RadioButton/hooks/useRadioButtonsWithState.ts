import { FormEvent, useCallback, useEffect, useState } from 'react';
import { OptionType } from '../../Select';

export type UseRadioButtonsWithStateValue = {
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
} & Omit<UseRadioButtonsWithStateProps, 'onChange'>;

export type UseRadioButtonsWithStateProps = {
    values: Array<OptionType>;
    groupName: string;
    onChange?: (newValue: string) => void;
    defaultValue?: string;
    isFullWidth?: boolean;
};

export type UseRadioButtonsWithStateType = (
    props: UseRadioButtonsWithStateProps
) => UseRadioButtonsWithStateValue;

export const useRadioButtonsWithState: UseRadioButtonsWithStateType = ({
    defaultValue = '',
    onChange: PropsOnChange,
    ...rest
}) => {
    const [value, setValue] = useState<UseRadioButtonsWithStateValue['value']>(
        defaultValue
    );

    useEffect(() => {
        if (typeof defaultValue !== 'undefined') {
            setValue(defaultValue);
        }
    }, []);

    const onChange = useCallback<UseRadioButtonsWithStateValue['onChange']>(
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
