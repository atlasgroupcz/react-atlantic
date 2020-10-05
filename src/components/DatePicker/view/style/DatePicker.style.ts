import { css } from 'styled-components';
import { styled } from '../../../../styled';

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

    .react-datepicker__triangle {
        left: 210px !important;
    }

    .react-datepicker-popper {
        margin-top: ${(props) => props.theme.margin.md};
        z-index: 1;
    }

    .react-datepicker {
        font-size: ${(props) => props.theme.font.size.md};
        font-family: ${(props) => props.theme.font.family};
        background-color: ${(props) => props.theme.color.background.alpha};

        &__day,
        &__day-name {
            flex: 1;
            padding: ${(props) => props.theme.padding.md} 0;
            border-radius: ${(props) => props.theme.radius};
            cursor: pointer;

            &--outside-month {
                color: ${(props) => props.theme.color.text.beta};
            }

            &--today {
                background-color: ${(props) =>
                    props.theme.color.background.beta};
            }

            &--selected {
                background-color: ${(props) => props.theme.color.success.alpha};
                color: ${(props) => props.theme.color.text.gamma};
                border: 1px solid ${(props) => props.theme.color.success.alpha};

                &:hover {
                    background-color: ${(props) =>
                        props.theme.color.success.beta};
                }
            }
        }

        &__day-names {
            border-bottom: 1px solid ${(props) => props.theme.color.border};
            background-color: ${(props) => props.theme.color.background.beta};
        }
    }
`;
