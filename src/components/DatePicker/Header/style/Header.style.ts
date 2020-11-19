import styled from 'styled-components';
import { Button } from '../../../Button';

export const StyledReactDatePickerHeaderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;

    padding: ${(props) => props.theme.padding.sm};
    border-radius: ${(props) => props.theme.radius}
        ${(props) => props.theme.radius} 0 0;
    height: ${(props) => props.theme.height.md};
    background-color: ${(props) => props.theme.color.primary.alpha};

    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};

    i {
        color: ${(props) => props.theme.color.text.gamma};
    }
`;

export const StyledReactDatePickerButtonMoveMonth = styled(Button)`
    width: ${(props) => props.theme.height.md};
    margin: 0;

    &:focus {
        &:after {
            content: none;
        }
    }
`;

export const StyledReactDatePickerButtonMoveYear = styled(Button)`
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
    line-height: ${(props) => props.theme.height.md};
    text-align: center;
    color: ${(props) => props.theme.color.text.gamma};
`;

export const StyledReactDatePickerTriangle = styled.div`
    position: absolute;
    top: -10px;
    left: 8px;
    border: 10px solid transparent;
    border-bottom-color: ${(props) => props.theme.color.primary.alpha};
    border-top: 0;
`;
