import { styled } from '../../../styled';

export const StyledTooltip = styled.div<{ positionAttr: string }>`
    z-index: 1000;
    position: fixed;
    padding: ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.md};
    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};
    line-height: 1.5;
    color: ${(props) => props.theme.color.text.gamma};
    background: ${(props) => props.theme.color.background.epsilon + '99'};
    border-radius: ${(props) => props.theme.radius};

    &::after {
        content: ' ';
        position: absolute;
        border: 5px solid transparent;
    }

    &[${({ positionAttr }) => positionAttr}='top'] {
        margin-bottom: ${(props) => props.theme.margin.sm};

        &::after {
            top: 100%;
            left: 50%;
            border-top-color: ${(props) =>
                props.theme.color.background.epsilon + '99'};
        }
    }

    &[${({ positionAttr }) => positionAttr}='bottom'] {
        margin-top: ${(props) => props.theme.margin.sm};

        &::after {
            bottom: 100%;
            left: 50%;
            border-bottom-color: ${(props) =>
                props.theme.color.background.epsilon + '99'};
        }
    }

    &[${({ positionAttr }) => positionAttr}='left'] {
        margin-right: ${(props) => props.theme.margin.sm};

        &::after {
            top: 50%;
            transform: translateY(-50%);
            left: 100%;
            border-left-color: ${(props) =>
                props.theme.color.background.epsilon + '99'};
        }
    }

    &[${({ positionAttr }) => positionAttr}='right'] {
        margin-left: ${(props) => props.theme.margin.sm};

        &::after {
            top: 50%;
            transform: translateY(-50%);
            right: 100%;
            border-right-color: ${(props) =>
                props.theme.color.background.epsilon + '99'};
        }
    }
`;

export const StyledTooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`;
