import DateFnsUtils from '@date-io/date-fns';
import { TextField, TextFieldProps } from '@material-ui/core';
import { DatePicker } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import * as React from 'react';

interface SimpleDatePickerProps {
    label: string
    inputFormat: string
    className?: string
}

export function SimpleDatePicker({ label, inputFormat, className }: SimpleDatePickerProps) {
    const [date, setDate] = React.useState<Date | null>(null);

    return <LocalizationProvider utils={DateFnsUtils} dateAdapter={AdapterDateFns}>
        <DatePicker
            label={label}
            value={date}
            inputFormat={inputFormat}
            onChange={onDateChange}
            renderInput={(params: TextFieldProps) => <TextField {...params} size="small" className={className} />}
        />
    </LocalizationProvider>

    function onDateChange(value: Date | null) {
        setDate(value);
    }
}
