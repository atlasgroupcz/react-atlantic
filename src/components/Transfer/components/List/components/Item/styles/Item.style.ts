import styled, { css } from 'styled-components';
import { StyledCheckboxSpan } from '../../../../../../Checkbox/view/alpha/styles';
import { StyledTransferListItemProps } from '../types';
import {
    StyledCheckboxInputShown,
    StyledCheckboxLabel,
    StyledCheckboxSpan,
} from '../../../../../../Checkbox/view/alpha/styles';

export const StyledTransferListItem = styled.li<StyledTransferListItemProps>`
    box-sizing: border-box;
    width: 100%;
    padding: 0 ${({ theme }) => theme.padding.md};
    cursor: pointer;
    transition: background 300ms;

    &:hover {
        background: ${({ theme }) => theme.color.background.beta};
    }

    ${StyledCheckboxSpan} {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    ${StyledCheckboxLabel} {
        align-items: flex-start;
        height: auto;
    }

    ${({ size }) =>
        size === 'small' &&
        css`
            ${StyledCheckboxInputShown} {
                margin-top: 3px;
            }

            ${StyledCheckboxSpan} {
                line-height: 21px;
                padding-top: ${({ theme }) => theme.padding.xs};
                padding-bottom: ${({ theme }) => theme.padding.xs};
            }
        `}

    ${({ size }) =>
        size === 'medium' &&
        css`
            ${StyledCheckboxInputShown} {
                margin-top: 7px;
            }

            ${StyledCheckboxSpan} {
                line-height: 24px;
                padding-top: ${({ theme }) => theme.padding.sm};
                padding-bottom: ${({ theme }) => theme.padding.sm};
            }
        `}
    
    ${({ size }) =>
        size === 'large' &&
        css`
            ${StyledCheckboxInputShown} {
                margin-top: 10px;
            }

            ${StyledCheckboxSpan} {
                line-height: 30px;
                padding-top: ${({ theme }) => theme.padding.sm};
                padding-bottom: ${({ theme }) => theme.padding.sm};
            }
        `}

    ${({ isMultiLine }) =>
        !isMultiLine &&
        css`
            ${StyledCheckboxSpan} {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        `}
`;
