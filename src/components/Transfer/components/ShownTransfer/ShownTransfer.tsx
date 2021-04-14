import React, { FC } from 'react';
import { InnerTransferProvider, useTransferContext } from '../../context';
import { StyledTransfer } from '../../styles';
import { resolveLeftSideOpen } from '../../utils/resolveLeftSideOpen';
import { resolveRightSideOpen } from '../../utils/resolveRightSideOpen';
import {
    TransferDefaultLeftSide,
    TransferDefaultRightSide,
} from './components';

export const ShownTransfer: FC = () => {
    const {
        footer,
        customWidth,
        preferredPosition,
        innerTransferController,
        positionController,
        isOpen,
        isFullWidth,
        rectFromHiddenTransfer,
        ...props
    } = useTransferContext();
    const { innerValue, ...innerRest } = innerTransferController(props);
    const isLeftSideOpen = resolveLeftSideOpen(!!isOpen, innerValue);
    const isRightSideOpen = resolveRightSideOpen(!!isOpen, innerValue);

    const { position, leftRight } = positionController!({
        customWidth: customWidth,
        preferredPosition: preferredPosition,
        isLeftSideOpen: !!isLeftSideOpen,
        isRightSideOpen: !!isRightSideOpen,
        rectFromHiddenTransfer,
    });

    return (
        <InnerTransferProvider
            {...innerRest}
            innerValue={innerValue}
            position={position}
            leftRight={leftRight}
        >
            <StyledTransfer
                leftRight={leftRight}
                position={position}
                isLeftSideOpen={isLeftSideOpen}
                isRightSideOpen={isRightSideOpen}
                isFullWidth={isFullWidth}
                customWidth={customWidth}
            >
                <TransferDefaultLeftSide />
                <TransferDefaultRightSide />
                {footer}
            </StyledTransfer>
        </InnerTransferProvider>
    );
};
