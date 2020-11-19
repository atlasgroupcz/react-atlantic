import { css } from 'styled-components';
import { styled } from '../../../../styled';
import { Button } from '../../../Button';

export const StyledReactDatePickerContainer = styled.div<{
    isFullWidth?: boolean;
}>`
    ${({ isFullWidth }) =>
        isFullWidth
            ? css`
                  width: 100%;
              `
            : ``}

    .react-datepicker-wrapper {
        ${({ isFullWidth }) =>
            isFullWidth
                ? css`
                      width: 100%;
                  `
                : ``}
    }

    .react-datepicker-popper {
        margin-top: ${(props) => props.theme.margin.md};
        z-index: 90;

        &[data-placement^='bottom'] .react-datepicker__triangle {
            left: 17px !important;
            border-bottom-color: ${(props) => props.theme.color.primary.alpha};
        }

        &[data-placement^='top'] .react-datepicker__triangle {
            left: 17px !important;
            border-top-color: ${(props) => props.theme.color.default};
        }
    }

    .react-datepicker {
        width: 250px;
        font-size: ${(props) => props.theme.font.size.md};
        font-family: ${(props) => props.theme.font.family};
        background-color: ${(props) => props.theme.color.background.alpha};
        box-shadow: ${(props) => props.theme.boxShadow.md};
        border: 0;

        &__header {
            margin: 0;
            padding: 0;
            border: 0;
        }

        &__month-container {
            width: 100%;
        }

        &__month {
            margin: ${(props) => props.theme.margin.sm} 0;
        }

        &__day-names,
        &__week {
            display: flex;
            align-items: center;
            padding: 0 ${(props) => props.theme.margin.sm};
            color: ${(props) => props.theme.color.text.alpha};
        }

        &__day,
        &__day-name {
            flex: 1;
            margin: 0;
            padding: ${(props) => props.theme.padding.md} 0;
            border-radius: ${(props) => props.theme.radius};
            line-height: 1rem;
            cursor: pointer;
            outline: none;

            &--outside-month {
                color: ${(props) => props.theme.color.text.beta};
            }

            &--today {
                font-weight: 400;
                background-color: ${(props) =>
                    props.theme.color.background.beta};
            }

            &--selected {
                background-color: ${(props) => props.theme.color.primary.alpha};
                color: ${(props) => props.theme.color.text.gamma};

                &:hover {
                    background-color: ${(props) =>
                        props.theme.color.primary.beta};
                }
            }
        }

        &__day-names {
            border-bottom: 1px solid ${(props) => props.theme.color.border};
            background-color: ${(props) => props.theme.color.background.beta};
        }
    }
`;

export const StyledReactDatePickerButton = styled(Button)`
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border: 0;
    border-top: 1px solid #d9d9d9;
`;
