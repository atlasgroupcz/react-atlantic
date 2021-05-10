import { useCallback, useState } from 'react';
import { SwitchProps, CommonSwitchProps, UseSwitchArgs } from '../types';

type UseSwitchValue = CommonSwitchProps & Pick<SwitchProps, 'onClick'>;

type UseSwitchType = (
    args: UseSwitchArgs & Pick<SwitchProps, 'onClick'>
) => UseSwitchValue;

export const useSwitch: UseSwitchType = ({
    isDefaultChecked = false,
    onClick,
    isPartiallyChecked,
    isDisabled,
}) => {
    const [isChecked, setChecked] = useState<CommonSwitchProps['isChecked']>(
        isDefaultChecked
    );

    const handleClick: SwitchProps['onClick'] = useCallback(
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
