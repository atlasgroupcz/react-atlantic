import { css, styled } from '../../../../../styled';
import { SharedSelectProps, StyledSelectProps } from '../../../types';

type StyledSelectInputProps = Pick<StyledSelectProps, 'size'> &
    Pick<SharedSelectProps, 'isOpen' | 'isDisabled'>;

export const StyledSelectInput = styled.div<StyledSelectInputProps>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.color.background.alpha};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius};
    cursor: pointer;

    &:hover {
        border-color: ${({ theme }) => theme.color.primary.alpha};
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

    ${({ theme, isOpen }) =>
        isOpen
            ? css`
                  border-color: ${theme.color.primary.alpha};
                  border-bottom-color: ${theme.color.border};
                  border-radius: ${theme.radius} ${theme.radius} 0 0;
              `
            : css`
                  border-radius: ${theme.radius};
              `}
    
    ${({ theme, isDisabled }) =>
        isDisabled &&
        css`
            background-color: ${theme.color.background.gamma};
            cursor: not-allowed;

            &:hover {
                border-color: ${theme.color.border};
            }
        `}
`;
