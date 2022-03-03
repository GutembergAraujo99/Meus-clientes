import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@material-ui/core';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

interface ComboBoxProps {
    className?: string
    label: string
    value: string
    item: string
    onChange: (event: SelectChangeEvent<string>) => void
}

export function ComboBox({ className, label, value, item, onChange }: ComboBoxProps) {
    return <FormControl size="small" className={className}>
        <InputLabel>{label}</InputLabel>
        <Select
            id={uuid()}
            value={value}
            label={label}
            onChange={onChange}
        >
            <MenuItem value={1}>{item}</MenuItem>
        </Select>
    </FormControl>
}