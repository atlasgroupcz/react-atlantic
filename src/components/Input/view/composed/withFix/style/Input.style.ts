import { styled } from '../../../../../../styled';

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
