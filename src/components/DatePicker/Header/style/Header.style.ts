import styled from 'styled-components';
import { SimpleButton } from '../../../Button';

export const StyledReactDatePickerHeaderContainer = styled.div`
    position: relative;
    display: flex;
    height: ${(props) => props.theme.height.md};
    padding: ${(props) => props.theme.padding.sm};
    border-radius: ${(props) => props.theme.radius}
        ${(props) => props.theme.radius} 0 0;
    background-color: ${(props) => props.theme.color.primary.alpha};
    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};

    i {
        color: ${(props) => props.theme.color.text.gamma};
    }
`;

export const StyledReactDatePickerButtonMoveMonth = styled(SimpleButton)`
    width: ${(props) => props.theme.height.md};
    margin: 0;

    &:focus {
        &:after {
            content: none;
        }
    }
`;

export const StyledReactDatePickerButtonMoveYear = styled(SimpleButton)`
    width: ${(props) => props.theme.height.md};
    margin: 0;

    &:focus {
        &:after {
            content: none;
        }
    }
`;

export const StyledReactDatePickerMonthAndDate = styled.span`
    flex: 100%;
    margin: 0 ${(props) => props.theme.margin.sm};
    line-height: ${(props) => props.theme.height.md};
    text-align: center;
    color: ${(props) => props.theme.color.text.gamma};
`;
