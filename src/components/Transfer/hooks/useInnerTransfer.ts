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
    options,
    ...props
}) => {
    const [innerValue, setInnerValue] = useState<
        NonNullable<UseInnerTransferProps['value']>
    >(value);
    const [innerOptions, setInnerOptions] = useState<
        NonNullable<UseInnerTransferProps['options']>
    >(value);

    const innerOptionClick = useCallback<
        NonNullable<UseInnerTransferValue['onOptionClick']>
    >((option) => {
        setInnerValue((prev) => transferOptionClick(option, prev));
    }, []);

    return {
        ...props,
        innerValue,
        innerOptions,
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
