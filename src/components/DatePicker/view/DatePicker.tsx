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
import { StyledReactDatePickerContainer } from './style';
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
                />
            ),
            renderCustomHeader = DatePickerHeader,
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
                    renderCustomHeader={renderCustomHeader}
                />
            </StyledReactDatePickerContainer>
        );
    }
);
