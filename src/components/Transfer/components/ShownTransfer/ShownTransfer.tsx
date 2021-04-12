import React, { FC } from 'react';
import { ControlledLeftSide } from '../../containers/LeftSide';
import { ControlledRightSide } from '../../containers/RightSide';
import { InnerTransferProvider, useTransferContext } from '../../context';
import { StyledTransfer } from '../../styles';
import { resolveLeftSideOpen } from '../../utils/resolveLeftSideOpen';
import { resolveRightSideOpen } from '../../utils/resolveRightSideOpen';

export const ShownTransfer: FC = () => {
    const {
        footer,
        customWidth,
        preferredPosition,
        innerTransferController,
        positionController,
        isOpen,
        isFullWidth,
        ...props
    } = useTransferContext();
    const { innerValue, ...innerRest } = innerTransferController(props);
    const isLeftSideOpen = resolveLeftSideOpen(!!isOpen, innerValue);
    const isRightSideOpen = resolveRightSideOpen(!!isOpen, innerValue);
    const { position, refOnTransfer, leftRight } = positionController!({
        customWidth: customWidth,
        preferredPosition: preferredPosition,
        isLeftSideOpen: !!isLeftSideOpen,
        isRightSideOpen: !!isRightSideOpen,
    });

    console.log(`showtransfer`, leftRight, position);

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
                ref={refOnTransfer}
                isLeftSideOpen={isLeftSideOpen}
                isRightSideOpen={isRightSideOpen}
                isFullWidth={isFullWidth}
                customWidth={customWidth}
            >
                <ControlledLeftSide />
                <ControlledRightSide />
                {footer}
            </StyledTransfer>
        </InnerTransferProvider>
    );
};
