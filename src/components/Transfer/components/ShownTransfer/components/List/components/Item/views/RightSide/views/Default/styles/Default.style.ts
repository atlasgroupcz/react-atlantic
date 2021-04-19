import styled, { css } from 'styled-components';
import { StyledTransformRightSideProps } from '../../../../../../../../RightSide';
import { StyledIcon } from '../../../../../../../../../../../../Icon';
import { StyledText } from '../../../../../../../../../../../../Typography';
import { StyledTransferListItem } from '../../../../../styles';

export const StyledTransformRightSideListItem = styled(StyledTransferListItem)<
    StyledTransformRightSideProps
>`
    justify-content: space-between;

    &:hover {
        ${StyledIcon} {
            color: ${({ theme }) => theme.color.error.alpha};
        }
    }

    ${StyledIcon} {
        flex-shrink: 0;
    }

    ${StyledText} {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            ${StyledText} {
                font-size: ${theme.font.size.sm};
            }
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            ${StyledText} {
                font-size: ${theme.font.size.md};
            }
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            ${StyledText} {
                font-size: ${theme.font.size.lg};
            }
        `}
`;
