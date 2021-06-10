import { UseRadioArgs } from '../types/Radio.type';

export type UseRadioButtonValue = {} & UseRadioButtonProps;

type UseRadioButtonProps = {} & UseRadioArgs;

export type UseRadioButtonType = (
    props: UseRadioButtonProps
) => UseRadioButtonValue;

export const useRadioButton: UseRadioButtonType = ({
    onChange,
    value,
    ...rest
}) => ({ onChange, value, ...rest });
