import { styled } from '../../../../../../styled';
import { sizeInput, isFullWidthMixin } from '../../../base/style/parts';
import { InputProps } from '../../../base/types';
import { fixPadding } from '../../../base/style/parts/fixPadding/fixPadding';

export const StyledInputAbstractFix = styled.span``;

export const StyledInputPrefix = styled(StyledInputAbstractFix)`
    position: absolute;
    font-size: 0;
    z-index: 8;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: ${(props) => props.theme.padding.md};
`;

export const StyledInputSuffix = styled(StyledInputAbstractFix)`
    position: absolute;
    font-size: 0;
    z-index: 8;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-right: ${(props) => props.theme.padding.md};
`;

type StyledInputContainerProps = {
    isPrefix?: boolean;
    isSuffix?: boolean;
} & Pick<InputProps, 'isFullWidth' | 'size'>;

export const StyledInputContainer = styled.span<StyledInputContainerProps>`
    display: inline-block;
    position: relative;
    ${(props) => sizeInput(props.size)}
    ${(props) => isFullWidthMixin(props.isFullWidth)}
    ${(props) => fixPadding(props.isPrefix, props.isSuffix)}
`;
