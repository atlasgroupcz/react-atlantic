import styled from 'styled-components';
import { SimpleButton } from '../../../Button';

export const StyledReactDatePickerHeaderContainer = styled.div`
    position: relative;
    display: flex;
    padding: ${({ theme }) => theme.padding.sm};
    border-radius: ${({ theme }) => theme.radius} ${({ theme }) => theme.radius}
        0 0;
    background-color: ${({ theme }) => theme.color.primary.alpha};
    font-size: ${({ theme }) => theme.font.size.md};
    font-family: ${({ theme }) => theme.font.family};

    i {
        color: ${({ theme }) => theme.color.text.gamma};
    }
`;

export const StyledReactDatePickerButtonMoveMonth = styled(SimpleButton)`
    width: ${({ theme }) => theme.height.md};
    margin: 0;

    &:focus {
        &:after {
            content: none;
        }
    }
`;

export const StyledReactDatePickerButtonMoveYear = styled(SimpleButton)`
    width: ${({ theme }) => theme.height.md};
    margin: 0;

    &:focus {
        &:after {
            content: none;
        }
    }
`;

export const StyledReactDatePickerMonthAndDate = styled.span`
    flex: 100%;
    margin: 0 ${({ theme }) => theme.margin.sm};
    line-height: ${({ theme }) => theme.height.md};
    text-align: center;
    color: ${({ theme }) => theme.color.text.gamma};
`;
