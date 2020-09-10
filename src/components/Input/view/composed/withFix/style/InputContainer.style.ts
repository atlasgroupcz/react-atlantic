import { css, styled } from '../../../../../../styled';
import { InputProps } from '../../../base/types';
import { StyledInput } from '../../../base/style';

export const StyledInputAbstractFix = styled.span`
    font-size: 0;
`;

export const StyledInputPrefix = styled(StyledInputAbstractFix)``;

export const StyledInputSuffix = styled(StyledInputAbstractFix)``;

type StyledInputContainerProps = {
    isPrefix?: boolean;
    isSuffix?: boolean;
} & Pick<InputProps, 'isFullWidth' | 'size' | 'isDisabled' | 'isRound'>;

export const StyledInputContainer = styled.span<StyledInputContainerProps>`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    padding: ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.md};
    border-radius: ${(props) => props.theme.radius};
    border: 1px solid ${(props) => props.theme.color.border};
    background-color: ${(props) => props.theme.color.background.alpha};
    transition: 0.3s border-color;
    
    &:hover,
    &:focus-within {
        border-color: ${(props) => props.theme.color.primary.alpha};
    }
    
    ${StyledInputAbstractFix} + ${StyledInput} {
      margin-left: ${(props) => props.theme.margin.sm};
    }
    
    ${StyledInput} + ${StyledInputAbstractFix} {
      margin-left: ${(props) => props.theme.margin.sm};
    }
    
    ${(props) =>
        props.size === 'small' &&
        css`
            width: 180px;
            height: ${props.theme.height.sm};
        `}
    
    ${(props) =>
        props.size === 'medium' &&
        css`
            width: 200px;
            height: ${props.theme.height.md};
        `}
    
    ${(props) =>
        props.size === 'large' &&
        css`
            width: 220px;
            height: ${props.theme.height.lg};
        `}
    
     ${(props) =>
         props.isFullWidth &&
         css`
             width: 100%;
         `}
    
    ${(props) =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
            outline: 0;
            background-color: ${props.theme.color.default};

            &:hover {
                outline: 0;
                border-color: ${props.theme.color.border};
            }
        `}
    
    ${(props) =>
        props.isRound &&
        css`
            border-radius: ${props.theme.rounded};
        `}
`;
