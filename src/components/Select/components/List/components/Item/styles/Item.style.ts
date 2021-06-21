import { css, styled } from '../../../../../../../styled';
import { StyledSelectProps } from '../../../../../types';
import { StyledStrongText, StyledText } from '../../../../../../Typography';
import { StyledLink } from '../../../../../../Typography/Link';

type StyledSelectListItemProps = Pick<StyledSelectProps, 'size'>;

export const StyledSelectListItem = styled.li<StyledSelectListItemProps>`
    box-sizing: border-box;
    cursor: pointer;
    word-break: break-word;
    background: ${({ theme }) => theme.color.background.alpha};

    &:hover,
    &:nth-child(odd) {
        background: ${({ theme }) => theme.color.background.gamma};
    }

    &:last-child {
        border-radius: 0 0 ${({ theme }) => theme.radius}
            ${({ theme }) => theme.radius};
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            line-height: 22px;
            padding: ${theme.padding.xs} ${theme.padding.sm};
            font-size: ${theme.font.size.sm};

            ${StyledText}, ${StyledStrongText}, ${StyledLink} {
                font-size: ${theme.font.size.sm};
            }
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            line-height: 24px;
            padding: ${theme.padding.sm} ${theme.padding.md};
            font-size: ${theme.font.size.md};

            ${StyledText}, ${StyledStrongText}, ${StyledLink} {
                font-size: ${theme.font.size.md};
            }
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            line-height: 30px;
            padding: ${theme.padding.sm} ${theme.padding.md};
            font-size: ${theme.font.size.lg};

            ${StyledText}, ${StyledStrongText}, ${StyledLink} {
                font-size: ${theme.font.size.lg};
            }
        `}
`;
