import { useCallback } from 'react';
import { MouseEvents } from '../../../../types';
import { useTransferContext } from '../../context';

export const useInnerTransferCancel = (
    handleCancel?: MouseEvents<HTMLElement>['onClick']
) => {
    const { isDisabled, setOpen } = useTransferContext();

    return useCallback(
        (e) => {
            if (!isDisabled) {
                if (handleCancel) {
                    handleCancel(e);
                }
                setOpen?.(false);
            }
        },
        [handleCancel, isDisabled, setOpen]
    );
};
