import React from 'react';
import { OptionType } from '../Select';
import { TransferProps } from './types';
import { StyledTransfer, StyledTransferContainer } from './styles';
import {
    TransferFooter,
    TransferLeftSide,
    TransferRightSide,
} from './components';

export const Transfer = <T extends OptionType>({
    options,
    inputProps,
    label,
    value,
    onOptionClick,
    isOpen,
    noResults,
    cancelButtonProps,
    clearButtonProps,
    submitButtonProps,
    size = 'medium',
    isFullWidth = false,
    visibleRows = 5,
}: TransferProps<T>) => {
    const isLeftSideOpen = isOpen && !!value;
    const isRightSideOpen = isOpen && value && value.length > 0;

    return (
        <StyledTransferContainer size={size}>
            <StyledTransfer
                isLeftSideOpen={isLeftSideOpen}
                isRightSideOpen={isRightSideOpen}
                isFullWidth={isFullWidth}
            >
                <TransferLeftSide
                    isLeftSideOpen={isLeftSideOpen}
                    isRightSideOpen={isRightSideOpen}
                    inputProps={inputProps}
                    options={options}
                    onOptionClick={onOptionClick}
                    visibleRows={visibleRows}
                    noResults={noResults}
                    size={size}
                />

                {isRightSideOpen && (
                    <TransferRightSide
                        label={label}
                        onOptionClick={onOptionClick}
                        value={value}
                        clearButtonProps={clearButtonProps}
                        size={size}
                        visibleRows={visibleRows}
                    />
                )}

                {(isLeftSideOpen || isRightSideOpen) && (
                    <TransferFooter
                        cancelButtonProps={cancelButtonProps}
                        submitButtonProps={submitButtonProps}
                        size={size}
                    />
                )}
            </StyledTransfer>
        </StyledTransferContainer>
    );
};
