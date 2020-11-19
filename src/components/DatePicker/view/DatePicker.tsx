import cs from 'date-fns/locale/cs';
import React, {
    PropsWithoutRef,
    RefAttributes,
    ForwardRefExoticComponent,
    forwardRef,
} from 'react';
import { DatePickerProps } from '../types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Input } from '../../Input';
import { Icon } from '../../Icon';
import {
    StyledReactDatePickerButton,
    StyledReactDatePickerButtonContainer,
    StyledReactDatePickerContainer,
} from './style';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerHeader } from '../Header';
import { Text } from '../../Typography';

registerLocale('cs', cs);

export type DatePickerType = ForwardRefExoticComponent<
    PropsWithoutRef<DatePickerProps> & RefAttributes<ReactDatePicker>
>;

export const DatePicker: DatePickerType = forwardRef(
    (
        {
            isFullWidth,
            customInput = (
                <Input
                    prefix={<Icon name={'calendarAlt'} />}
                    isFullWidth={isFullWidth}
                />
            ),
            ...props
        },
        ref
    ) => {
        return (
            <StyledReactDatePickerContainer isFullWidth={isFullWidth}>
                <ReactDatePicker
                    ref={ref}
                    {...props}
                    customInput={customInput}
                    renderCustomHeader={({
                        date,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                        changeYear,
                    }) =>
                        DatePickerHeader({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                            changeYear,
                        })
                    }
                >
                    <StyledReactDatePickerButtonContainer>
                        <StyledReactDatePickerButton isFullWidth>
                            <Text>Zvolit dnešní datum</Text>
                        </StyledReactDatePickerButton>
                    </StyledReactDatePickerButtonContainer>
                </ReactDatePicker>
            </StyledReactDatePickerContainer>
        );
    }
);
