import styled, { css } from 'styled-components';
import { StyledIcon } from '../../../../Icon/view/styles';
import { StyledText } from '../../../../Typography/Text';
import { PureButtonProps } from '../../../types/PureButton.types';
import { Button } from '../../default';

export const getPureButtonStyles = () => css`
    background: none;
    border: none;
    box-shadow: none;

    &:after {
        display: none;
    }

    &:hover {
        background: none;
    }
`;

export const getPureButtonTypeStyles = (type: PureButtonProps['atlanticType']) => css`
    ${({ theme }) => {
        let color = theme.color.text.alpha;

        if (type === 'primary') {
            color = theme.color.primary.alpha;
        } else if (type === 'success') {
            color = theme.color.success.alpha;
        } else if (type === 'warning') {
            color = theme.color.warning.alpha;
        } else if (type === 'error') {
            color = theme.color.error.alpha;
        } else if (type === 'info') {
            color = theme.color.info.alpha;
        }

        return css`
            color: ${color};

            & > ${StyledIcon}, ${StyledText} {
                color: ${color};
            }
        `;
    }}
`;

export const StyledPureButton = styled(Button)<PureButtonProps>`
    ${({ type }) => css`
        ${getPureButtonStyles()};
        ${getPureButtonTypeStyles(type)};
    `}
`;
