import React, { FC } from 'react';
import { Icon } from '../../../../../../../Icon';
import { Input } from '../../../../../../../Input';
import { TransferLeftSideProps, TransferProps } from '../../../../../../types';
import { StyledTransferLeftDropdown } from '../../styles';

export type LeftSideTransferInputType = FC<
    TransferProps['clearInputProps'] &
        Pick<TransferLeftSideProps, 'isLeftSideOpen'>
>;

export const LeftSideTransferInput: LeftSideTransferInputType = ({
    value,
    size,
    isDisabled,
    defaultValue,
    isLeftSideOpen,
    onClick,
    ...rest
}) => {
    return (
        <Input
            suffix={
                <StyledTransferLeftDropdown
                    isTransferOpen={isLeftSideOpen}
                    isIconVisible={!!value}
                >
                    {value && <Icon name={`clear`} onClick={onClick} />}
                </StyledTransferLeftDropdown>
            }
            isFullWidth
            size={size}
            isDisabled={isDisabled}
            {...rest}
        />
    );
};
