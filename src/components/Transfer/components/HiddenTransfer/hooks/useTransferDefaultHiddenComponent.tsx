import React from 'react';
import { InputFixProps } from '../../../../Input';
import { useTransferContext } from '../../../context';
import { useHiddenTransfer } from '../../../hooks/useHiddenTransfer';
import { useHiddenInputValue } from '../../../hooks/useHiddenInputValue';
import { StyledTransferLeftDropdown } from '../../ShownTransfer';
import { Icon } from '../../../../Icon';

export const useTransferDefaultHiddenComponent = (
    props: InputFixProps
): InputFixProps => {
    const { isFullWidth, isDisabled, size } = useTransferContext();
    const onFocus = useHiddenTransfer();
    const value = useHiddenInputValue();

    return {
        suffix: (
            <StyledTransferLeftDropdown isIconVisible>
                <Icon name={`arrowDown`} />
            </StyledTransferLeftDropdown>
        ),
        isFullWidth,
        isDisabled,
        size,
        onFocus,
        value,
        placeholder: 'Vyberte...',
        ...props,
    };
};
