import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

type StyledCheckboxProps = {
    isChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
    isTextDotted?: boolean;
    name?: string;
    position?: 'right' | 'left';
};

export const HiddenCheckbox = styled.input.attrs({
    type: 'checkbox',
})`
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    position: absolute;
    z-index: -1;
`;

export const StyledCheckboxInputShown = styled(animated.div).attrs({
    className: `atlantic--checkbox`,
})<StyledCheckboxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => parseInt(props.theme.padding.xs, 0) - 1}px;
    background: ${(props) => props.theme.color.background.alpha};
    border-radius: ${(props) => parseInt(props.theme.radius, 0) - 1}px;
    border: 1px solid ${(props) => props.theme.color.border};

    ${(props) =>
        props.isDisabled &&
        css`
            background-color: ${props.theme.color.default};
            cursor: not-allowed;
        `}
`;

export const StyledCheckboxLabel = styled.label<StyledCheckboxProps>`
    height: ${(props) => props.theme.height.sm};
    font-size: 14px;
    font-family: ${(props) => props.theme.font.family};
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.color.text.alpha};

    ${(props) =>
        !props.isDisabled &&
        css`
            :hover {
                .atlantic--checkbox {
                    border: 1px solid ${props.theme.color.primary.alpha};
                }
            }
        `};

    ${(props) =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `};
`;

export const StyledCheckboxMark = styled(animated.div)<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.width.xs};
  min-width: ${(props) => props.theme.width.xs};
  height: ${(props) => props.theme.width.xs};
  min-height: ${(props) => props.theme.width.xs};
  border-radius: ${(props) => parseInt(props.theme.radius, 0) - 2}px;
  background-color: ${(props) => props.theme.color.primary.alpha};
  opacity: 0;

  ${(props) =>
      (props.isChecked || props.isPartiallyChecked) &&
      css`
          background-color: ${props.theme.color.primary.alpha};
      `}

  ${(props) =>
      props.isDisabled &&
      (props.isChecked || props.isPartiallyChecked) &&
      css`
          background-color: ${props.theme.color.background.beta};
      `}

    ${(props) =>
        props.isDisabled &&
        css`
            color: transparent;
            cursor: not-allowed;
        `}
`;

export const StyledCheckboxSpan = styled.span<StyledCheckboxProps>`
    padding: 0 ${(props) => props.theme.padding.md};
    user-select: none;
    line-height: 1;

    ${(props) =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `}
`;

export const StyledCheckboxIcon = styled.i<StyledCheckboxProps>`
    line-height: 0;
    color: ${(props) => props.theme.color.text.gamma};

    ${(props) =>
        (props.isPartiallyChecked || (!props.isChecked && props.isDisabled)) &&
        css`
            color: transparent;
        `}

    ${(props) =>
        props.isDisabled &&
        css`
            color: ${props.theme.color.text.beta};
            cursor: not-allowed;
        `}
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

StyledCheckboxInputShown.displayName = 'StyledCheckboxInputShown';

StyledCheckboxLabel.displayName = 'StyledCheckboxLabel';

StyledCheckboxMark.displayName = 'StyledCheckboxMark';

StyledCheckboxSpan.displayName = 'StyledCheckboxSpan';

StyledCheckboxIcon.displayName = 'StyledCheckboxIcon';
