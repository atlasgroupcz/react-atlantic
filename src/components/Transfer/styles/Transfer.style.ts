import styled, { css } from 'styled-components';
import { Position } from '../../../types';
import { StyledComponentTransferProps } from '../types';
import { resolveWidthFromString } from '../utils';

type StyledTransferProps = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    position: Position;
} & StyledComponentTransferProps;

export const StyledTransfer = styled.div<StyledTransferProps>`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    ${({ theme, isLeftSideOpen, customWidth }) =>
        isLeftSideOpen &&
        css`
            position: absolute;
            width: ${customWidth?.leftSide ?? `300px`};
            z-index: 99;
            border: 1px solid ${theme.color.primary.alpha};
            border-radius: ${theme.radius};
            background: ${theme.color.background.alpha};
            box-shadow: ${theme.boxShadow.sm};
        `}

    ${({ isRightSideOpen, customWidth }) =>
        isRightSideOpen &&
        css`
            position: absolute;
            width: ${customWidth?.rightSide ?? `600px`};
        `}

    ${({ position }) =>
        position === 'left'
            ? css`
                  right: 0px;
                  flex-direction: row-reverse;
              `
            : ``}
`;

export const StyledTransferContainer = styled.div<StyledComponentTransferProps>`
    box-sizing: border-box;
    position: relative;
    width: 100%;

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
