import styled, { css } from 'styled-components';
import { StyledTransformRightSideProps } from '../../../../RightSide';
import { StyledText } from '../../../../../../../../Typography';
import { StyledLink } from '../../../../../../../../Typography/Link';

export const StyledTransformRightSideHeader = styled.div<
    StyledTransformRightSideProps
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.padding.md};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            height: ${theme.height.sm};

            ${StyledText}, ${StyledLink} {
                font-size: ${theme.font.size.sm};
            }
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            height: ${theme.height.md};

            ${StyledText}, ${StyledLink} {
                font-size: ${theme.font.size.md};
            }
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            height: ${theme.height.lg};

            ${StyledText}, ${StyledLink} {
                font-size: ${theme.font.size.lg};
            }
        `}
`;
