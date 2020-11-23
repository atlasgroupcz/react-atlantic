import { css } from '../../styled';

const arrowHeight = `6px`;
const tooltipOuterGap = `10px`;

export const createTooltips = (
    contentAttr = 'data-title',
    positionAttr = 'data-position'
) => css`
    [${contentAttr}] {
        position: relative;

        // Content
        &:after {
            content: attr(${contentAttr});
            position: absolute;
            left: 50%;
            top: calc(100% + ${arrowHeight});
            transform: translateX(-50%);
            max-width: 100%;
            line-height: 1.5;
            margin-top: ${(props) => props.theme.margin.md};
            padding: ${(props) => props.theme.padding.sm}
                ${(props) => props.theme.padding.md};
            pointer-events: none;
            visibility: hidden;
            color: ${(props) => props.theme.color.text.gamma};
            font-size: ${(props) => props.theme.font.size.md};
            font-family: ${(props) => props.theme.font.family};
            border-radius: ${(props) => props.theme.radius};
            z-index: 1000;
            background: ${(props) =>
                props.theme.color.background.epsilon + '00'};
            overflow-wrap: break-word;
            white-space: nowrap;
            transition: background 0.3s ease-out;
        }

        // Arrow
        &:before {
            content: '';
            pointer-events: none;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            height: 0;
            width: 0;
            z-index: 1000;
            visibility: hidden;
            border: 8px solid transparent;
            border-bottom-color: ${(props) =>
                props.theme.color.background.epsilon + '00'};
            transition: border-color 0.3s ease-out;
        }

        &:hover:after {
            background: ${(props) =>
                props.theme.color.background.epsilon + 'e6'};
            visibility: visible;
        }

        &:hover:before {
            border-bottom-color: ${(props) =>
                props.theme.color.background.epsilon + 'e6'};
            visibility: visible;
        }

        &[${positionAttr}='top'] {
            // Content
            &:after {
                top: auto;
                left: 50%;
                transform: translateX(-50%);
                bottom: calc(100% + ${arrowHeight});
                margin: 0 0 ${tooltipOuterGap} 0;
            }

            // Arrow
            &:before {
                top: auto;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-bottom-color: transparent;
                border-top-color: ${(props) =>
                    props.theme.color.background.epsilon + '00'};
            }

            &:hover:before {
                border-bottom-color: transparent;
                border-top-color: ${(props) =>
                    props.theme.color.background.epsilon + 'e6'};
            }
        }

        &[${positionAttr}='bottom'] {
            // Content
            &:after {
                top: calc(100% + ${arrowHeight});
                left: 50%;
                transform: translateX(-50%);
                bottom: auto;
                margin: ${tooltipOuterGap} 0 0 0;
            }

            // Arrow
            &:before {
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-bottom-color: ${(props) =>
                    props.theme.color.background.epsilon + '00'};
            }

            &:hover:before {
                border-bottom-color: ${(props) =>
                    props.theme.color.background.epsilon + 'e6'};
            }
        }

        &[${positionAttr}='right'] {
            // Content
            &:after {
                right: auto;
                left: calc(100% + ${arrowHeight});
                top: 50%;
                transform: translateY(-50%);
                margin: 0 0 0 ${tooltipOuterGap};
            }

            // Arrow
            &:before {
                top: 50%;
                left: 100%;
                transform: translateY(-50%);
                border-bottom-color: transparent;
                border-right-color: ${(props) =>
                    props.theme.color.background.epsilon + '00'};
            }

            &:hover:before {
                border-bottom-color: transparent;
                border-right-color: ${(props) =>
                    props.theme.color.background.epsilon + 'e6'};
            }
        }

        &[data-position='left'] {
            // Content
            &:after {
                left: auto;
                right: calc(100% + ${arrowHeight});
                top: 50%;
                transform: translateY(-50%);
                margin: 0 ${tooltipOuterGap} 0 0;
            }

            // Arrow
            &:before {
                top: 50%;
                right: 100%;
                left: auto;
                transform: translateY(-50%);
                border-bottom-color: transparent;
                border-left-color: ${(props) =>
                    props.theme.color.background.epsilon + '00'};
            }

            &:hover:before {
                border-bottom-color: transparent;
                border-left-color: ${(props) =>
                    props.theme.color.background.epsilon + 'e6'};
            }
        }
    }
`;
