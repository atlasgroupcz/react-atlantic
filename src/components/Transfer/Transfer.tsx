import React, { forwardRef } from 'react';
import { TransferProps } from './types';
import { DefaultHiddenTransfer, ShownTransfer } from './components';
import { TransferProvider } from './context';
import { StyledTransfer, StyledTransferContainer } from './styles';
import { useTransferPosition } from './hooks';
import { resolveLeftSideOpen } from './utils/resolveLeftSideOpen';
import { resolveRightSideOpen } from './utils/resolveRightSideOpen';
import { DEFAULT_WIDTHS_TRANSFER } from './constants';
import { useInnerTransfer } from './hooks/useInnerTransfer';

export const Transfer = forwardRef<HTMLDivElement, TransferProps>(
    (
        {
            innerTransferController = useInnerTransfer,
            positionController = useTransferPosition,
            size = 'medium',
            customWidth = DEFAULT_WIDTHS_TRANSFER,
            preferredPosition = 'right',
            isFullWidth = false,
            visibleRows = 5,
            hiddenTransferComponent = <DefaultHiddenTransfer />,
            isSorted = true,
            ...props
        },
        ref
    ) => {
        const isLeftSideOpen = resolveLeftSideOpen(!!props.isOpen, props.value);
        const isRightSideOpen = resolveRightSideOpen(
            !!props.isOpen,
            props.value
        );
        const isHiddenTransfer = !isLeftSideOpen && !isRightSideOpen;
        const { position, refOnTransfer, leftRight } = positionController({
            customWidth: customWidth,
            preferredPosition: preferredPosition,
            isLeftSideOpen: !!isLeftSideOpen,
            isRightSideOpen: !!isRightSideOpen,
        });

        return (
            <TransferProvider
                innerTransferController={innerTransferController}
                position={position}
                size={size}
                customWidth={customWidth}
                preferredPosition={preferredPosition}
                isFullWidth={isFullWidth}
                visibleRows={visibleRows}
                isSorted={isSorted}
                {...props}
            >
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
                        {isHiddenTransfer ? (
                            hiddenTransferComponent
                        ) : (
                            <ShownTransfer />
                        )}
                    </StyledTransfer>
                </StyledTransferContainer>
            </TransferProvider>
        );
    }
);
