import { ControllerTransferProps, TransferProps } from '../types';
import { OptionType } from '../../Select';
import { useCallback, useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { transferOptionClick } from '../utils';

export const useTransfer = <T extends OptionType<string, string>>({
    options,
    defaultValue,
    isDisabled,
    noResults,
    ...props
}: ControllerTransferProps<T>): TransferProps<T> => {
    const [value, setValue] = useState<T[]>(defaultValue || []);
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOutsideClick = useCallback(() => {
        setOpen(false);
    }, []);
    const ref = useOutsideClick<HTMLDivElement>(handleOutsideClick);

    const onOptionClick: ControllerTransferProps<T>['onOptionClick'] = (
        option
    ) => {
        if (!isDisabled) {
            setValue((prev) => transferOptionClick(option, prev));
        }
    };

    return {
        ...props,
        options,
        value,
        onOptionClick,
        setValue,
        setOpen,
        isOpen,
        ref,
        isDisabled,
        ...props,
    };
};
