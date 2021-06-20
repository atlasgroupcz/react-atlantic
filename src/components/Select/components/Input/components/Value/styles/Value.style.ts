import { css, styled } from '../../../../../../../styled';
import { StyledSelectProps } from '../../../../../types';
import { getTypographyDefaultStyles } from '../../../../../../Typography';

type StyledSelectInputValueProps = {
    isOptionSelected?: boolean;
} & Pick<StyledSelectProps, 'size'>;

export const StyledSelectInputValue = styled.div<StyledSelectInputValueProps>`
    ${getTypographyDefaultStyles};
    margin: 0;
    padding: 0 ${({ theme }) => theme.padding.md};
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${({ theme, isOptionSelected }) =>
        !isOptionSelected &&
        css`
            color: ${theme.color.text.beta};
        `}

    ${({ theme, size }) => css`
        ${size === 'small' &&
        css`
            font-size: ${theme.font.size.sm};
        `}

        ${size === 'medium' &&
        css`
            font-size: ${theme.font.size.md};
        `}
        
        ${size === 'large' &&
        css`
            font-size: ${theme.font.size.lg};
        `}
    `}
`;
