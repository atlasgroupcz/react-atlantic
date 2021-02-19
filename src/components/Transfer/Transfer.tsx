import React, { forwardRef } from 'react';
import { TransferProps } from './types';
import { StyledTransfer, StyledTransferContainer } from './styles';
import {
    TransferFooter,
    TransferLeftSide,
    TransferRightSide,
} from './components';

export const Transfer = forwardRef<HTMLDivElement, TransferProps>(
    (
        {
            options,
            clearInputProps,
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
            isDisabled,
            customWidth,
        },
        ref
    ) => {
        const isLeftSideOpen = isOpen && !!value;
        const isRightSideOpen = isOpen && value && value.length > 0;

        return (
            <StyledTransferContainer size={size} ref={ref}>
                <StyledTransfer
                    isLeftSideOpen={isLeftSideOpen}
                    isRightSideOpen={isRightSideOpen}
                    isFullWidth={isFullWidth}
                    customWidth={customWidth}
                >
                    <TransferLeftSide
                        isLeftSideOpen={isLeftSideOpen}
                        isRightSideOpen={isRightSideOpen}
                        clearInputProps={clearInputProps}
                        options={options}
                        onOptionClick={onOptionClick}
                        visibleRows={visibleRows}
                        noResults={noResults}
                        size={size}
                        value={value}
                        isDisabled={isDisabled}
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
    }
);
