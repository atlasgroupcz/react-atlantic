import React from 'react';
import { Icon } from '../../Icon';
import { months } from '../types';
import {
    StyledReactDatePickerButtonMoveMonth,
    StyledReactDatePickerButtonMoveYear,
    StyledReactDatePickerHeaderContainer,
    StyledReactDatePickerMonthAndDate,
} from './style';

export interface DatePickerHeaderProps {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
    changeYear: (year: number) => void;
}

export const DatePickerHeader: React.FC<DatePickerHeaderProps> = (
    props
): React.ReactElement => {
    const {
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
        changeYear,
    } = props;

    return (
        <>
            <StyledReactDatePickerHeaderContainer>
                <StyledReactDatePickerButtonMoveYear
                    onClick={() => changeYear(date.getFullYear() - 1)}
                    type={'primary'}
                >
                    <Icon name={'arrowDoubleLeft'} />
                </StyledReactDatePickerButtonMoveYear>
                <StyledReactDatePickerButtonMoveMonth
                    onClick={decreaseMonth}
                    isDisabled={prevMonthButtonDisabled}
                    type={'primary'}
                >
                    <Icon name={'arrowLeft'} />
                </StyledReactDatePickerButtonMoveMonth>
                <StyledReactDatePickerMonthAndDate>
                    {months[date.getMonth()] + ' ' + date.getFullYear()}
                </StyledReactDatePickerMonthAndDate>
                <StyledReactDatePickerButtonMoveMonth
                    onClick={increaseMonth}
                    isDisabled={nextMonthButtonDisabled}
                    type={'primary'}
                >
                    <Icon name={'arrowRight'} />
                </StyledReactDatePickerButtonMoveMonth>
                <StyledReactDatePickerButtonMoveYear
                    onClick={() => changeYear(date.getFullYear() + 1)}
                    type={'primary'}
                >
                    <Icon name={'arrowDoubleRight'} />
                </StyledReactDatePickerButtonMoveYear>
            </StyledReactDatePickerHeaderContainer>
        </>
    );
};
