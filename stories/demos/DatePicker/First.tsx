import React, { useState } from 'react';
import { DatePicker, DatePickerProps } from '../../../src';

export const DatePickerFirstDemo = () => {
    const [date, setDate] = useState<DatePickerProps['selected']>(new Date());

    const onChange: DatePickerProps['onChange'] = (date: Date) => {
        setDate(date);
    };

    return (
        <>
            <DatePicker
                selected={date}
                onChange={onChange}
                locale={'cs'}
                isFullWidth
            />
        </>
    );
};
