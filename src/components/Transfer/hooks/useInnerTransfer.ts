import { useCallback, useMemo, useState } from 'react';
import {
    UseInnerTransfer,
    UseInnerTransferProps,
    UseInnerTransferValue,
} from '../types/UseInnerTransfer';
import { sortTransferOptions, transferOptionClick } from '../utils';

//? TODO: write description
export const useInnerTransfer: UseInnerTransfer = ({
    value = [],
    options,
    isSorted,
    ...props
}) => {
    const {
        sortTransferOptions: sortTransferOptionsProps,
        transferOptionClick: transferOptionClickProps,
    } = props;

    const [innerValue, setInnerValue] = useState<
        NonNullable<UseInnerTransferProps['value']>
    >(value);
    const [innerOptions, setInnerOptions] = useState<
        NonNullable<UseInnerTransferProps['options']>
    >(options);

    const innerOptionClick = useCallback<
        NonNullable<UseInnerTransferValue['onOptionClick']>
    >(
        (option) => {
            setInnerValue((prev) =>
                transferOptionClickProps
                    ? transferOptionClickProps(option, prev)
                    : transferOptionClick(option, prev)
            );
        },
        [transferOptionClickProps]
    );

    const outvalue = useMemo(
        () =>
            isSorted
                ? sortTransferOptionsProps
                    ? sortTransferOptionsProps(innerValue)
                    : sortTransferOptions(innerValue)
                : innerValue,
        [innerValue, isSorted, sortTransferOptionsProps]
    );

    const outoptions = useMemo(
        () =>
            isSorted
                ? sortTransferOptionsProps
                    ? sortTransferOptionsProps(innerOptions)
                    : sortTransferOptions(innerOptions)
                : innerOptions,
        [innerOptions, isSorted, sortTransferOptionsProps]
    );

    return {
        ...props,
        innerValue: outvalue,
        innerOptions: outoptions,
        setInnerValue,
        setInnerOptions,
        onOptionClick: innerOptionClick,
    };
};
