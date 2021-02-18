import React, { forwardRef } from 'react';
import { OptionType } from '../Select';
import { TransferProps } from './types';
import { StyledTransfer, StyledTransferContainer } from './styles';
import {
    TransferFooter,
    TransferLeftSide,
    TransferRightSide,
} from './components';
import { InputFixProps } from '../Input';

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
