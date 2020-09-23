import React, { useState } from 'react';
import { DatePicker, DatePickerProps } from '../../../src';

export const DatePickerFirstDemo = () => {
    const [date, setDate] = useState<DatePickerProps['selected']>(new Date());

    const onChange: DatePickerProps['onChange'] = (date) => {
        setDate(date as any);
    };

    return (
        <>
            <DatePicker selected={date} onChange={onChange} />
        </>
    );
};
