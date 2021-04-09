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
    const [innerValue, setInnerValue] = useState<
        NonNullable<UseInnerTransferProps['value']>
    >(value);
    const [innerOptions, setInnerOptions] = useState<
        NonNullable<UseInnerTransferProps['options']>
    >(options);

    const innerOptionClick = useCallback<
        NonNullable<UseInnerTransferValue['onOptionClick']>
    >((option) => {
        setInnerValue((prev) => transferOptionClick(option, prev));
    }, []);

    const outvalue = useMemo(
        () => (isSorted ? sortTransferOptions(innerValue) : innerValue),
        [innerValue, isSorted]
    );

    const outoptions = useMemo(
        () => (isSorted ? sortTransferOptions(innerOptions) : innerOptions),
        [innerOptions, isSorted]
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
// const sortedOptions = sortTransferOptions(
//     options?.filter((option) =>
//         option.label
//             .toLowerCase()
//             .includes((inputProps.value as string)?.toLowerCase())
//     ) || []
// );

//     const sortedValue = sortTransferOptions(value);
