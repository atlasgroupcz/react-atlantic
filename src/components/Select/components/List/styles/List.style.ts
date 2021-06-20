import { styled } from '../../../../../styled';

export const StyledSelectList = styled.ul`
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    z-index: 100;
    border: 1px solid ${({ theme }) => theme.color.primary.alpha};
    border-top: none;
    border-radius: 0 0 ${({ theme }) => theme.radius}
        ${({ theme }) => theme.radius};
`;
