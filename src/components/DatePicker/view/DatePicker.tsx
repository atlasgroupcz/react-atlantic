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
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('cs', cs);

export type DatePickerType = ForwardRefExoticComponent<
    PropsWithoutRef<DatePickerProps> & RefAttributes<ReactDatePicker>
>;

export const DatePicker: DatePickerType = forwardRef(
    (
        {
            customInput = <Input prefix={<Icon name={'calendarAlt'} />} />,
            ...props
        },
        ref
    ) => {
        return (
            <StyledReactDatePickerContainer>
                <ReactDatePicker
                    ref={ref}
                    {...props}
                    customInput={customInput}
                />
            </StyledReactDatePickerContainer>
        );
    }
);
