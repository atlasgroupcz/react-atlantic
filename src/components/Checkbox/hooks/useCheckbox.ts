import { useCallback, useState } from 'react';
import { CheckboxProps, CommonCheckboxProps, UseCheckboxArgs } from '../view';

type UseCheckboxValue = CommonCheckboxProps & Pick<CheckboxProps, 'onClick'>;

type UseCheckboxType = (
    args: UseCheckboxArgs & Pick<CheckboxProps, 'onClick'>
) => UseCheckboxValue;

export const useCheckbox: UseCheckboxType = ({
    isDefaultChecked = false,
    onClick,
    isPartiallyChecked,
    isDisabled,
}) => {
    const [isChecked, setChecked] = useState<CommonCheckboxProps['isChecked']>(
        isDefaultChecked
    );

    const handleClick: CheckboxProps['onClick'] = useCallback(
        (e): void => {
            if (!isDisabled) {
                if (!isPartiallyChecked) {
                    const { checked } = e.currentTarget;
                    setChecked(checked);
                }

                onClick?.(e);
            }
        },
        [onClick, isPartiallyChecked, isDisabled]
    );

    return { isChecked, onClick: handleClick };
};
