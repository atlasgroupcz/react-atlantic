import { IconProps } from '../../types';
import { excludeIntrinsicElementProps } from '../../../../utils/excludeProps';
import { css, keyframes, styled } from '../../../../styled';

const iconPropKeys: (keyof IconProps)[] = ['isRotating'];
const iconIntrinsicExclude = excludeIntrinsicElementProps<IconProps>();

export const spin = () => {
    return keyframes`
  100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }`;
};

export const StyledIcon = styled(iconIntrinsicExclude('i', iconPropKeys))`
    display: inline-block;
    cursor: ${(props) => (props.onClick ? 'pointer' : 'inherit')};
    line-height: 0;
    height: ${(props) => props.theme.font.size.md};
    width: ${(props) => props.theme.font.size.md};
    color: ${(props) => props.theme.color.text.alpha};
    font-style: normal;
    text-align: center;
    text-transform: none;

    svg {
        vertical-align: top;
        width: 100%;
        height: 100%;
        font-size: inherit;
    }

    ${(props) =>
        props.isRotating &&
        css`
            -webkit-animation: ${spin} 4s linear infinite;
            -moz-animation: ${spin} 4s linear infinite;
            animation: ${spin} 4s linear infinite;
        `}
`;

StyledIcon.displayName = 'StyledIcon';
