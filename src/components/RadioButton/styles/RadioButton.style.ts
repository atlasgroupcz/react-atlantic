import { css, styled } from '../../../styled';
import {
    getButtonTypeStyles,
    getDefaultButtonStyles,
} from '../../Button/view/default/styles';
import { StyledRadioButtonProps } from '../types';

export const StyledRadioButtonInputHidden = styled.input.attrs({
    type: 'radio',
})`
    position: absolute;
    left: -9999px;
    top: -9999px;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
`;

export const StyledRadioButtonLabel = styled.label<StyledRadioButtonProps>`
    ${getDefaultButtonStyles()};
    ${({ type }) => getButtonTypeStyles(type!, false)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
`;

export const StyledRadioButtonContainer = styled.div<StyledRadioButtonProps>`
    display: flex;

    ${StyledRadioButtonLabel}:first-of-type {
        border-top-left-radius: ${({ theme }) => theme.radius};
        border-bottom-left-radius: ${({ theme }) => theme.radius};
    }

    ${StyledRadioButtonLabel}:last-of-type {
        border-top-right-radius: ${({ theme }) => theme.radius};
        border-bottom-right-radius: ${({ theme }) => theme.radius};
    }

    ${({ isFullWidth }) =>
        isFullWidth &&
        css`
            width: 100%;

            ${StyledRadioButtonLabel} {
                width: 100%;
            }
        `}
`;
