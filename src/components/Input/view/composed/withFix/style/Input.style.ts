import { css, styled } from '../../../../../../styled';
import { isFullWidthMixin, StyledInput } from '../../../base/style';
import { StyledComposedInputProps } from './types';

export const StyledAbstractFix = styled.span``;

export const StyledPrefix = styled(StyledAbstractFix)`
    position: absolute;
    font-size: 0;
    z-index: 8;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: ${(props) => props.theme.padding.md};
`;
export const StyledSuffix = styled(StyledAbstractFix)`
    position: absolute;
    font-size: 0;
    z-index: 8;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-right: ${(props) => props.theme.padding.md};
`;
