import styled, { css } from 'styled-components';
import { HorizontalPosition } from '../../../types';
import { StyledComponentTransferProps } from '../types';
import { TransferPosition } from '../types/TransferPosition';
import { StyledInputContainer } from '../../Input/view/composed/withFix/styles';

type StyledTransferProps = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    position?: TransferPosition;
    leftRight?: HorizontalPosition;
} & StyledComponentTransferProps;

export const StyledTransfer = styled.div<StyledTransferProps>`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    ${({ theme, isLeftSideOpen, customWidth }) =>
        isLeftSideOpen &&
        css`
            position: absolute;
            width: ${customWidth?.partiallyOpen ?? `300px`};
            z-index: 99;
            border: 1px solid ${theme.color.primary.alpha};
            border-radius: ${theme.radius};
            background: ${theme.color.background.alpha};
            box-shadow: ${theme.boxShadow.sm};
        `}

    ${({ leftRight }) =>
        leftRight === 'left'
            ? css`
                  left: 0;
              `
            : css`
                  right: 0;
              `}


    ${({ isRightSideOpen }) =>
        isRightSideOpen
            ? css`
                  position: absolute;
              `
            : ``}


    ${({ position }) =>
        position === 'left'
            ? css`
                  flex-direction: row-reverse;
              `
            : ``}


            ${({ isRightSideOpen, customWidth, position = 'right' }) =>
        isRightSideOpen && ['left', 'right'].includes(position)
            ? css`
                  width: ${customWidth?.fullyOpen ?? `600px`};
              `
            : ``}
`;

export const StyledTransferContainer = styled.div<StyledComponentTransferProps>`
    box-sizing: border-box;
    position: relative;
    width: 100%;

    ${StyledInputContainer} {
        padding-right: 0;
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            min-height: ${theme.height.sm};
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            min-height: ${theme.height.md};
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            min-height: ${theme.height.lg};
        `}
`;
