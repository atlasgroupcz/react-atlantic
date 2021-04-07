import { FormEvent } from 'react';
import { OptionType } from '../../Select/types/OptionType';

export type UseRadioButtonsValue = {} & UseRadioButtonsProps;

export type UseRadioButtonsProps = {
    values: Array<OptionType>;
    groupName: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    currentValue: string;
    isFullWidth?: boolean;
};

export type UseRadioButtonsType = (
    props: UseRadioButtonsProps
) => UseRadioButtonsValue;

export const useRadioButtons: UseRadioButtonsType = ({
    onChange,
    currentValue,
    ...rest
}) => ({ onChange, currentValue, ...rest });
