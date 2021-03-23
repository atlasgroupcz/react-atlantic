import { css, styled } from '../../../styled';

export const tooltipStyles = css<{ positionAttr: string }>`
    opacity: 0;
    visibility: hidden;

    z-index: 1000;
    position: fixed;

    padding: ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.md};
    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};
    line-height: 1.5;
    color: ${(props) => props.theme.color.text.gamma};
    background: ${(props) => props.theme.color.background.epsilon + 'dd'};
    border-radius: ${(props) => props.theme.radius};
    pointer-events: none;
`;

export const StyledTooltip = styled.div<{ positionAttr: string }>`
    ${tooltipStyles}
`;

export const StyledTooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`;