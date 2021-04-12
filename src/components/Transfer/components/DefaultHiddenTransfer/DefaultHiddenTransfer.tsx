import React from 'react';
import { wrap } from '../../../../utils';
import { Icon } from '../../../Icon';
import { Input, InputFixProps } from '../../../Input';
import { useTransferContext } from '../../context';
import { useHiddenInputValue } from '../../hooks/useHiddenInputValue';
import { useHiddenTransfer } from '../../hooks/useHiddenTransfer';
import { StyledTransferLeftDropdown } from '../ShownTransfer/components/LeftSide';

export const useDefaultHiddenTransfer = (
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

export const DefaultHiddenTransfer = wrap(Input, useDefaultHiddenTransfer);
