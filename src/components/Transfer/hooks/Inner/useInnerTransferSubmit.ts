import { useCallback } from 'react';
import { FormEvents } from '../../../../types';
import { useInnerTransferContext, useTransferContext } from '../../context';

export const useInnerTransferSubmit = (
    handleSubmit?: FormEvents<HTMLElement>['onSubmit']
) => {
    const { isDisabled, setOpen, setValue } = useTransferContext();
    const { innerValue } = useInnerTransferContext();

    return useCallback<NonNullable<FormEvents<HTMLElement>['onSubmit']>>(
        (e) => {
            if (!isDisabled) {
                if (handleSubmit) {
                    handleSubmit(e);
                }

                setOpen?.(false);
                setValue?.(innerValue ?? []);
            }
        },
        [handleSubmit, innerValue, isDisabled, setOpen, setValue]
    );
};
