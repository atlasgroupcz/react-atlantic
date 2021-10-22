import { ControllerTransferProps, TransferProps } from '../types';
import { useCallback, useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { transferOptionClick } from '../utils';

export type UseTransferT = {
    value: string;
    label: string | React.ReactElement;
};

export const useTransfer = <T extends UseTransferT>({
    options,
    defaultValue,
    isDisabled,
    noResults,
    ...props
}: ControllerTransferProps<T>): TransferProps<T> => {
    const processedDefaultValue = defaultValue?.map((v) => ({
        ...v,
        label: typeof v.label === 'string' ? v.label : v.label.props.children,
    }));

    const [value, setValue] = useState<T[]>(processedDefaultValue || []);
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
