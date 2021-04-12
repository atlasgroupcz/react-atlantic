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
import { ControlledDefaultTransferFilterInput } from './components/ShownTransfer/components/FilterInput';
import { DefaultRightHeader } from './components/ShownTransfer/components/RightHeader';
import { NoResults } from './components/ShownTransfer/components/NoResults';
import { ControlledTransferFooter } from './containers/Footer';
import { ControlledLeftSideTransferList } from './containers/LifeSideList';
import { ControlledRightContainer } from './containers/RightContainer';

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
            leftHeader = <ControlledDefaultTransferFilterInput />,
            leftContainer = <ControlledLeftSideTransferList />,
            rightHeader = <DefaultRightHeader />,
            rightContainer = <ControlledRightContainer />,
            footer = <ControlledTransferFooter />,
            noResults = <NoResults />,
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
                leftHeader={leftHeader}
                leftContainer={leftContainer}
                rightHeader={rightHeader}
                rightContainer={rightContainer}
                footer={footer}
                noResults={noResults}
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
