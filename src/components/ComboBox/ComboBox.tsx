import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@material-ui/core';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

interface ComboBoxProps {
    className?: string
    label: string
    value: string
    items: Array<string | number | { id: number, name: string }>
    onChange: (event: SelectChangeEvent<string>) => void
}

export function ComboBox({ className, label, value, items, onChange }: ComboBoxProps) {
    return <FormControl size="small" className={className}>
        <InputLabel>{label}</InputLabel>
        <Select
            id={uuid()}
            value={value}
            label={label}
            onChange={onChange}
        >
            {items.map((item, index) => <MenuItem key={index} value={index}>{item}</MenuItem>)}
        </Select>
    </FormControl>
}