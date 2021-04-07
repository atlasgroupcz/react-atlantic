import { FormEvent } from 'react';
import { OptionType } from '../../Select';

export type UseRadioButtonValue = {} & UseRadioButtonProps;

export type UseRadioButtonProps = {
    values: Array<OptionType>;
    groupName: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
    isFullWidth?: boolean;
};

export type UseRadioButtonType = (
    props: UseRadioButtonProps
) => UseRadioButtonValue;

export const useRadioButton: UseRadioButtonType = ({
    onChange,
    value,
    ...rest
}) => ({ onChange, value, ...rest });
