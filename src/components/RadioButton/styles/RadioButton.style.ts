import { css, styled } from '../../../styled';
import { ButtonStyleType } from '../../Button';
import {
    getButtonTypeStyles,
    getDefaultButtonStyles,
} from '../../Button/view/default/styles';

export const StyledRadioButtonLabel = styled.label<{
    type: ButtonStyleType;
}>`
    ${getDefaultButtonStyles()};
    ${(props) =>
        css`
            ${getButtonTypeStyles(props.type, false)};
            border-radius: 0;
        `}

    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const StyledRadioButtonContainer = styled.div<{
    isFullWidth?: boolean;
}>`
    display: flex;

    ${(props) =>
        props.isFullWidth &&
        css`
            ${StyledRadioButtonLabel} {
                width: 100%;
            }
            width: 100%;
        `}

    ${StyledRadioButtonLabel}:first-of-type {
        border-top-left-radius: ${(props) => props.theme.radius};
        border-bottom-left-radius: ${(props) => props.theme.radius};
    }

    ${StyledRadioButtonLabel}:last-of-type {
        border-top-right-radius: ${(props) => props.theme.radius};
        border-bottom-right-radius: ${(props) => props.theme.radius};
    }
`;

export const StyledRadioButtonInputHidden = styled.input.attrs({
    type: 'radio',
})`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
`;
