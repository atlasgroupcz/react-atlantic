import {
    ControllerTransferProps,
    TransferProps,
    UseTransferOptionT,
} from '../types';
import { useCallback, useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { transferOptionClick } from '../utils';

export const useTransfer = ({
    options,
    defaultValue,
    isDisabled,
    noResults,
    ...props
}: ControllerTransferProps): TransferProps => {
    const processedDefaultValue = defaultValue?.map((v) => ({
        ...v,
        label: typeof v.label === 'string' ? v.label : v.label.props.children,
    }));

    const [value, setValue] = useState<UseTransferOptionT[]>(
        processedDefaultValue || []
    );
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOutsideClick = useCallback(() => {
        setOpen(false);
    }, []);
    const ref = useOutsideClick<HTMLDivElement>(handleOutsideClick);

    const onOptionClick: ControllerTransferProps['onOptionClick'] = (
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
