import React, { FC } from 'react';
import { Icon } from '../../../Icon';
import { Input } from '../../../Input';
import { useTransferContext } from '../../context';
import { useHiddenInputValue } from '../../hooks/useHiddenInputValue';
import { useHiddenTransfer } from '../../hooks/useHiddenTransfer';
import { StyledTransferLeftDropdown } from '../ShownTransfer/components/LeftSide';

export const DefaultHiddenTransfer: FC = () => {
    const { isFullWidth, isDisabled, size } = useTransferContext();
    const onFocus = useHiddenTransfer();
    const value = useHiddenInputValue();

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
            onFocus={onFocus}
            value={value}
        />
    );
};

// <StyledTransfer
// leftRight={leftRight}
// position={position}
// ref={refOnTransfer}
// isLeftSideOpen={isLeftSideOpen}
// isRightSideOpen={isRightSideOpen}
// isFullWidth={isFullWidth}
// customWidth={customWidth}
// >
