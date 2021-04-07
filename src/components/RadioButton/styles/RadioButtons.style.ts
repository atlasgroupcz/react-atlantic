import { css, styled } from '@atlasgroup/react-atlantic/lib';
import { ButtonStyleType } from '@atlasgroup/react-atlantic/src/components/Button/types/index';
import {
    getButtonTypeStyles,
    getDefaultButtonStyles,
} from '@atlasgroup/react-atlantic/lib/components/Button/view/default/styles';

export const StyledRadioButton = styled.label<{
    type: ButtonStyleType;
}>`
    ${(props) =>
        css`
            ${getDefaultButtonStyles()};
            ${getButtonTypeStyles(props.type, false)};
            border-radius: 0;
        `}

    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const StyledRadioButtonsContainer = styled.div<{
    isFullWidth?: boolean;
}>`
    display: flex;

    ${(props) =>
        props.isFullWidth &&
        css`
            ${StyledRadioButton} {
                width: 100%;
            }
            width: 100%;
        `}

    input {
        display: none;
    }

    ${StyledRadioButton}:first-of-type {
        border-top-left-radius: ${(props) => props.theme.radius};
        border-bottom-left-radius: ${(props) => props.theme.radius};
    }

    ${StyledRadioButton}:last-of-type {
        border-top-right-radius: ${(props) => props.theme.radius};
        border-bottom-right-radius: ${(props) => props.theme.radius};
    }
`;
