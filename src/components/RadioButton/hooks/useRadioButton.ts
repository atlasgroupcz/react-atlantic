import { UseRadioButtonArgs } from '../types';

export type UseRadioButtonValue = {} & UseRadioButtonProps;

type UseRadioButtonProps = {} & UseRadioButtonArgs;

export type UseRadioButtonType = (
    props: UseRadioButtonProps
) => UseRadioButtonValue;

export const useRadioButton: UseRadioButtonType = ({
    onChange,
    value,
    ...rest
}) => ({ onChange, value, ...rest });
