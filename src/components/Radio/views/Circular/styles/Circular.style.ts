import { css, styled } from '../../../../../styled';
import { StyledRadioProps } from '../../../types/Radio.type';

const radioSize = 20;

export const StyledRadioCircularLabel = styled.label<StyledRadioProps>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.padding.md};
    width: 100%;
    border-radius: ${({ theme }) => theme.radius};
    background: ${({ theme }) => theme.color.background.gamma};
    padding: ${({ theme }) => theme.padding.sm}
        ${({ theme }) => theme.padding.md};
    cursor: pointer;
`;

export const StyledRadioCircularContainer = styled.div<StyledRadioProps>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.padding.sm};

    ${({ isFullWidth }) =>
        isFullWidth &&
        css`
            width: 100%;

            ${StyledRadioCircularLabel} {
                width: 100%;
            }
        `}
`;

export const StyledRadioCircularRadio = styled.div<{
    isChecked: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: ${radioSize}px;
    width: ${radioSize}px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.background.alpha};
    border: 1px solid ${({ theme }) => theme.color.border};
`;

export const StyledRadioCircularRadioMark = styled.div<{
    isChecked: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: calc(${radioSize}px / 2);
    height: calc(${radioSize}px / 2);
    border-radius: 50%;
    transition: background-color 0.5s ease-in-out;

    ${({ theme, isChecked }) =>
        isChecked &&
        css`
            background-color: ${theme.color.primary.alpha};
        `}
`;
