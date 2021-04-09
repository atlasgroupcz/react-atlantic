import { useCallback, useState } from 'react';
import {
    UseInnerTransfer,
    UseInnerTransferProps,
    UseInnerTransferValue,
} from '../types/UseInnerTransfer';
import { transferOptionClick } from '../utils';

//? TODO: write description
export const useInnerTransfer: UseInnerTransfer = ({
    value = [],
    ...props
}) => {
    const [innerValue, setInnerValue] = useState<
        NonNullable<UseInnerTransferProps['value']>
    >(value);

    const innerOptionClick = useCallback<
        NonNullable<UseInnerTransferValue['onOptionClick']>
    >((option) => {
        setInnerValue((prev) => transferOptionClick(option, prev));
    }, []);

    return {
        ...props,
        setInnerValue,
        value: innerValue,
        onOptionClick: innerOptionClick,
    };
};
