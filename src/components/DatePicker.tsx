import { TextField, TextFieldProps } from '@material-ui/core';
import { DatePicker } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import * as React from 'react';

interface SimpleDatePickerProps {
    label: string
    className?: string
}

export function SimpleDatePicker({ label, className }: SimpleDatePickerProps) {
    const [date, setDate] = React.useState<Date | null>(null);

    return <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            label={label}
            value={date}
            onChange={onDateChange}
            renderInput={(params: TextFieldProps) => <TextField {...params} size="small" className={className} />}
        />
    </LocalizationProvider>

    function onDateChange(value: Date | null) {
        setDate(value);
    }
}
