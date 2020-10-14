import styled, { css } from 'styled-components';
import { StyledIcon } from '../../../../Icon';
import { StyledText } from '../../../../Typography/Text/Text.style';
import { Button } from '../../default';
import { SimpleButtonProps } from '../SimpleButton';

export type StyledSimpleButtonProps = Omit<
    SimpleButtonProps,
    'type' | 'htmlType'
> & {
    atlanticType: SimpleButtonProps['type'];
    type: JSX.IntrinsicElements['button']['type'];
};

export const StyledSimpleButton = styled(Button)<StyledSimpleButtonProps>`
    && {
        background: ${(props) => props.theme.color.background.alpha};
        box-shadow: none;
        border: none;

        &:hover {
            background: ${(props) => props.theme.color.background.beta};
        }

        ${(props) =>
            props.isAlternative &&
            css`
                background: ${props.theme.color.background.beta};

                &:hover {
                    background: ${props.theme.color.background.alpha};
                }
            `}

        ${(props) =>
            props.type &&
            css`
                ${props.type === 'primary' &&
                css`
                    background: ${props.theme.color.primary.alpha};

                    &:hover {
                        background: ${props.theme.color.primary.beta};
                    }
                `}

                ${props.type === 'success' &&
                css`
                    background: ${props.theme.color.success.alpha};

                    &:hover {
                        background: ${props.theme.color.success.beta};
                    }
                `}
          
          ${props.type === 'warning' &&
                css`
                    background: ${props.theme.color.warning.alpha};

                    &:hover {
                        background: ${props.theme.color.warning.beta};
                    }
                `}
          
          ${props.type === 'error' &&
                css`
                    background: ${props.theme.color.error.alpha};

                    &:hover {
                        background: ${props.theme.color.error.beta};
                    }
                `}
          
          ${props.type === 'dashed' &&
                css`
                    border: 1px dashed ${props.theme.color.border};
                `}
            `}

        ${(props) =>
            props.isDisabled &&
            css`
                background: transparent;

                &:hover {
                    background: transparent;
                }

                ${StyledText}, ${StyledIcon} {
                    opacity: 0.6;
                }
            `}
    }
`;