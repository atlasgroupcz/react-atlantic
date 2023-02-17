import cs from 'date-fns/locale/cs';
import React, { PropsWithoutRef, RefAttributes, ForwardRefExoticComponent, forwardRef } from 'react';
import { DatePickerProps } from '../types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Input } from '../../Input';
import { Icon } from '../../Icon';
import { StyledReactDatePickerContainer } from './styles';
import { DatePickerHeader } from '../Header';

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
                    data-is-full-width={isFullWidth}
                />
            ),
            renderCustomHeader = DatePickerHeader,
            ...props
        },
        ref
    ) => {
        return (
            <StyledReactDatePickerContainer isFullWidth={isFullWidth} data-is-full-width={isFullWidth}>
                <ReactDatePicker
                    ref={ref}
                    {...props}
                    customInput={customInput}
                    renderCustomHeader={renderCustomHeader}
                />
            </StyledReactDatePickerContainer>
        );
    }
);
