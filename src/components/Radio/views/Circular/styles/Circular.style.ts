import { css, styled } from '../../../../../styled';
import { StyledRadioProps } from '../../../types/Radio.type';
import { StyledRadioButtonsInputHidden } from '../../Buttons/styles';

const radioSize = 20;

export const StyledRadioCircularInputHidden = styled(
    StyledRadioButtonsInputHidden
)``;

export const StyledRadioCircularLabel = styled.label<StyledRadioProps>`
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    ${({ theme, isDisabled, isChecked }) => css`
        ${isDisabled &&
        css`
            color: ${theme.color.text.alpha};
            opacity: 0.6;
            cursor: not-allowed;

            ${StyledRadioCircularRadioMark} {
                background-color: ${isChecked
                    ? theme.color.border
                    : `transparent`};
            }
        `}
    `}
`;

export const StyledRadioCircularRadio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: ${radioSize}px;
    width: ${radioSize}px;
    margin-right: ${({ theme }) => theme.margin.md};
    box-sizing: border-box;
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

export const StyledRadioCircularContainer = styled.div<StyledRadioProps>`
    display: flex;
    flex-direction: column;

    ${({ isFullWidth }) =>
        isFullWidth &&
        css`
            width: 100%;

            ${StyledRadioCircularLabel} {
                width: 100%;
            }
        `}
`;
