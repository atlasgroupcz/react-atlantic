import React, { FC } from 'react';
import { Icon } from '../../../Icon';
import { Input } from '../../../Input';
import { useTransferContext } from '../../context';
import { StyledTransferLeftDropdown } from '../ShownTransfer/components/LeftSide';

export const DefaultHiddenTransfer: FC = () => {
    const {
        isFullWidth,
        isDisabled,
        size,
        clearInputProps,
    } = useTransferContext();
    return (
        <Input
            suffix={
                <StyledTransferLeftDropdown isIconVisible>
                    <Icon name={`arrowDown`} />
                </StyledTransferLeftDropdown>
            }
            isFullWidth={isFullWidth}
            size={size}
            isDisabled={isDisabled}
            {...clearInputProps}
        />
    );
};
