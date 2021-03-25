import React, { forwardRef } from 'react';
import { TransferProps } from './types';
import { StyledTransfer, StyledTransferContainer } from './styles';
import {
    TransferFooter,
    TransferLeftSide,
    TransferRightSide,
} from './components';
import { useTransferPosition } from './hooks/useTransferPosition';
import { DEFAULT_WIDTHS_TRANSFER } from './constants';

export const Transfer = forwardRef<HTMLDivElement, TransferProps>(
    (
        {
            positionController = useTransferPosition,
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
            size = 'large',
            isFullWidth = false,
            visibleItems,
            isDisabled,
            customWidth = DEFAULT_WIDTHS_TRANSFER,
            preferredPosition = 'right',
            isMultiLine = false,
        },
        ref
    ) => {
        const isLeftSideOpen = isOpen && !!value;
        const isRightSideOpen = isOpen && value && value.length > 0;
        const { position, refOnTransfer, leftRight } = positionController({
            customWidth,
            preferredPosition,
            isLeftSideOpen: !!isLeftSideOpen,
            isRightSideOpen: !!isRightSideOpen,
        });

        return (
            <StyledTransferContainer size={size} ref={ref}>
                <StyledTransfer
                    leftRight={leftRight}
                    position={position}
                    ref={refOnTransfer}
                    isLeftSideOpen={isLeftSideOpen}
                    isRightSideOpen={isRightSideOpen}
                    isFullWidth={isFullWidth}
                    customWidth={customWidth}
                >
                    <TransferLeftSide
                        position={position}
                        isLeftSideOpen={isLeftSideOpen}
                        isRightSideOpen={isRightSideOpen}
                        clearInputProps={clearInputProps}
                        options={options}
                        onOptionClick={onOptionClick}
                        visibleItems={visibleItems}
                        noResults={noResults}
                        size={size}
                        value={value}
                        isDisabled={isDisabled}
                        isFullWidth={isFullWidth}
                        isMultiLine={isMultiLine}
                    />

                    {isRightSideOpen && (
                        <TransferRightSide
                            position={position}
                            label={label}
                            onOptionClick={onOptionClick}
                            value={value}
                            clearButtonProps={clearButtonProps}
                            size={size}
                            visibleItems={visibleItems}
                            isMultiLine={isMultiLine}
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
