import { useCallback } from 'react';
import { MouseEvents } from '../../../../types';
import { useInnerTransferContext, useTransferContext } from '../../context';

export const useInnerTransferClear = (
    handleClear?: MouseEvents<HTMLElement>['onClick']
) => {
    const { isDisabled } = useTransferContext();
    const { setInnerValue } = useInnerTransferContext();

    return useCallback(
        (e) => {
            if (!isDisabled) {
                if (handleClear) {
                    handleClear(e);
                }
                setInnerValue?.([]);
            }
        },
        [handleClear, isDisabled, setInnerValue]
    );
};
