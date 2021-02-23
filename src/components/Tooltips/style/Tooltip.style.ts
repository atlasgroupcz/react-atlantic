import { styled } from '../../../styled';

export const StyledTooltip = styled.div`
    z-index: 1000;
    position: fixed;
    padding: 0 ${(props) => props.theme.padding.md};
    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};
    line-height: 2;
    color: ${(props) => props.theme.color.text.gamma};
    background: ${(props) => props.theme.color.background.epsilon + '99'};
    border-radius: ${(props) => props.theme.radius};
`;

export const StyledTooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`;
