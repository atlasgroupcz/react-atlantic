import { css, styled } from '../../../../../styled';
import {
    getInputDefaultSideGaps,
    InputBase,
    InputContainer,
} from '../../../components';
import { getTypographyDefaultStyles } from '../../../../Typography';
import { theme } from '../../../../../theme';

export const inputFloatingLabelLabelHorizontalPadding = theme.padding.sm;

export const StyledInputFloatingLabelLabel = styled.label`
    ${getTypographyDefaultStyles};
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    max-width: 100%;
    margin: 0;
    line-height: normal;
    cursor: text;
    transition: all 300ms;
    user-select: none;
    color: ${({ theme }) => theme.color.text.beta};
    white-space: nowrap;
`;

export const StyledInputFloatingLabelInput = styled(InputBase)`
    width: 100%;

    &::placeholder {
        opacity: 0;
    }

    &:focus,
    &:hover {
        & + ${StyledInputFloatingLabelLabel} {
            color: ${({ theme }) => theme.color.primary.alpha};
        }
    }

    &:focus,
    &:not(:placeholder-shown) {
        &::placeholder {
            opacity: 1;
        }

        & + ${StyledInputFloatingLabelLabel} {
            transform: none;
            padding: 0 ${inputFloatingLabelLabelHorizontalPadding};
            font-size: ${({ theme }) => theme.font.size.sm};
            background: ${({ theme }) => theme.color.background.alpha};

            ${({ size }) =>
                size === 'small' &&
                css`
                    top: -13px;
                `}

            ${({ size }) =>
                size === 'medium' &&
                css`
                    top: -15px;
                `}

            ${({ size }) =>
                size === 'large' &&
                css`
                    top: -17px;
                `}
        }
    }
`;

export const StyledInputFloatingLabelInputContainer = styled.span`
    ${getInputDefaultSideGaps()};
    box-sizing: border-box;
    display: block;
    position: relative;
    flex: 1;
    min-width: 0;
`;

export const StyledInputFloatingLabelContainer = styled(InputContainer)`
    position: relative;
`;
