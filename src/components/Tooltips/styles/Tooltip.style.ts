import { css, styled } from '../../../styled';

export const getDefaultTooltipStyles = () => css<{ positionAttr: string }>`
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
    position: fixed;
    padding: ${({ theme }) => theme.padding.sm}
        ${({ theme }) => theme.padding.md};
    font-size: ${({ theme }) => theme.font.size.md};
    font-family: ${({ theme }) => theme.font.family};
    line-height: 1.5;
    color: ${({ theme }) => theme.color.text.gamma};
    border-radius: ${({ theme }) => theme.radius};
    pointer-events: none;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.65);
`;

export const StyledTooltip = styled.div<{ positionAttr: string }>`
    ${getDefaultTooltipStyles()}
`;
