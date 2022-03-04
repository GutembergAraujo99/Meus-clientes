import { Divider, Tab, Tabs } from '@material-ui/core';
import * as React from 'react';
import { Modal } from '../../components/Modal/Modal';
import { CustomerFilter } from './customer-filter/CustomerFilter';
import { TicketFilter } from './ticket-filter/TicketFilter';
import { VehicleFilter } from './vehicle-filter/VehicleFilter';

interface FilterProps {
    open: boolean
    onClose: () => void
}

export function Filter({ open, onClose }: FilterProps) {
    return <Modal
        title="Filtro Avançado"
        content={<FilterContent />}
        defaultButtonText="Limpar"
        secondaryButtonText="Filtrar"
        open={open}
        onClose={onClose}
    />
}

function FilterContent() {
    const [value, setValue] = React.useState(0);

    return <>
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
        >
            <Tab value={0} label="Cliente" />
            <Tab value={1} label="Evento" />
            <Tab value={2} label="Veículo" />
        </Tabs>
        <Divider />
        <TabPanel value={value} index={0}>
            <CustomerFilter />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <TicketFilter />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <VehicleFilter />
        </TabPanel>
    </>


    function handleChange(event: React.SyntheticEvent, newValue: number) {
        setValue(newValue);
    }
}

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        {...other}
    >
        {value === index && (
            <div>
                <span>{children}</span>
            </div>
        )}
    </div>
}