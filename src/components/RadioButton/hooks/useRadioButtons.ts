import { FormEvent } from 'react';
import { OptionType } from '../../Select';

export type UseRadioButtonsValue = {} & UseRadioButtonsProps;

export type UseRadioButtonsProps = {
    values: Array<OptionType>;
    groupName: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
    isFullWidth?: boolean;
};

export type UseRadioButtonsType = (
    props: UseRadioButtonsProps
) => UseRadioButtonsValue;

export const useRadioButtons: UseRadioButtonsType = ({
    onChange,
    value,
    ...rest
}) => ({ onChange, value, ...rest });
