import React, { forwardRef, MutableRefObject, Ref, useRef } from 'react';
import { TransferProps } from '../../types';
import { useInnerTransfer, useTransferPosition } from '../../hooks';
import { DEFAULT_WIDTHS_TRANSFER } from '../../constants';
import { ShownTransfer } from '../../components';
import { TransferProvider } from '../../context';
import { StyledTransfer, StyledTransferContainer } from '../../styles';
import { TransferDefaultFilterInput } from '../../components/ShownTransfer/components/FilterInput';
import { TransferDefaultFooter } from '../../components/ShownTransfer/components/Footer';
import { TransferComposedLeftSide } from '../../components/ShownTransfer/components/LeftSide';
import { TransferDefaultHiddenComponent } from '../../components/HiddenTransfer';
import { TransferDefaultRightHeader } from '../../components/ShownTransfer/components/RightHeader';
import { TransferDefaultRightList } from '../../components/ShownTransfer/components/List';
import { TransferDefaultNoResults } from '../../components/ShownTransfer/components/NoResults';
import { OptionType } from '../../../Select';

const createSaveRect = (ref: MutableRefObject<DOMRect | null>) => {
    const saveRef: Ref<HTMLDivElement> = (r) => {
        if (r) {
            ref.current = r.getBoundingClientRect();
        }
    };
    return saveRef;
};

export const DefaultTransfer = forwardRef<HTMLDivElement, TransferProps<OptionType<string, any>>>(
    (
        {
            innerTransferController = useInnerTransfer,
            positionController = useTransferPosition,
            size = 'medium',
            customWidth = DEFAULT_WIDTHS_TRANSFER,
            preferredPosition = 'right',
            isFullWidth = false,
            visibleRows = 5,
            hiddenTransferComponent = <TransferDefaultHiddenComponent />,
            leftHeader = <TransferDefaultFilterInput />,
            leftContainer = <TransferComposedLeftSide />,
            rightHeader = <TransferDefaultRightHeader />,
            rightContainer = <TransferDefaultRightList />,
            footer = <TransferDefaultFooter />,
            noResults = <TransferDefaultNoResults />,
            isSorted = true,
            isOpen,
            ...props
        },
        ref
    ) => {
        const rectFromHiddenTransfer = useRef<DOMRect | null>(null);
        const saveRect = createSaveRect(rectFromHiddenTransfer);

        return (
            <TransferProvider
                rectFromHiddenTransfer={rectFromHiddenTransfer}
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
                    {!isOpen ? (
                        <StyledTransfer
                            ref={saveRect}
                            isFullWidth={isFullWidth}
                            customWidth={customWidth}
                            data-is-full-width={isFullWidth}
                        >
                            {hiddenTransferComponent}
                        </StyledTransfer>
                    ) : (
                        <ShownTransfer />
                    )}
                </StyledTransferContainer>
            </TransferProvider>
        );
    }
);
