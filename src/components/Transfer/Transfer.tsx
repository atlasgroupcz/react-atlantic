import React, { forwardRef } from 'react';
import { TransferProps } from './types';
import { DefaultHiddenTransfer, ShownTransfer } from './components';
import { TransferProvider } from './context';
import { StyledTransferContainer } from './styles';
import { useTransferPosition } from './hooks';
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
            isOpen,
            ...props
        },
        ref
    ) => {
        return (
            <TransferProvider
                innerTransferController={innerTransferController}
                positionController={positionController}
                leftHeader={leftHeader}
                leftContainer={leftContainer}
                rightHeader={rightHeader}
                rightContainer={rightContainer}
                footer={footer}
                noResults={noResults}
                preferredPosition={preferredPosition}
                isOpen={isOpen}
                size={size}
                customWidth={customWidth}
                visibleRows={visibleRows}
                isFullWidth={isFullWidth}
                isSorted={isSorted}
                {...props}
            >
                <StyledTransferContainer size={size} ref={ref}>
                    {!isOpen ? hiddenTransferComponent : <ShownTransfer />}
                </StyledTransferContainer>
            </TransferProvider>
        );
    }
);
