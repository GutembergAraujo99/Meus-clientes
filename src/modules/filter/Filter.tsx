import { Divider, Tab, Tabs } from '@material-ui/core';
import * as React from 'react';
import { Modal } from '../../components/Modal/Modal';
import { TextsProvider } from '../../translation/filter';
import { CustomerFilter } from './customer-filter/CustomerFilter';
import { TicketFilter } from './ticket-filter/TicketFilter';
import { VehicleFilter } from './vehicle-filter/VehicleFilter';

const texts = TextsProvider.get()

interface FilterProps {
    open: boolean
    onClose: () => void
}

export function Filter({ open, onClose }: FilterProps) {
    return <Modal
        title={texts.ADVANCED_FILTER_MODAL_HEADER}
        defaultButtonText={texts.CLEAR_BUTTON_MODAL_FOOTER}
        secondaryButtonText={texts.FILTER_BUTTON_MODAL_FOOTER}
        open={open}
        onClick={onClose}
        onClose={onClose}
        hasDivider
    >
        <FilterContent />
    </Modal>
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
            <Tab value={0} label={texts.CUSTOMER_TAB_OPTION} />
            <Tab value={1} label={texts.TICKET_TAB_OPTION} />
            <Tab value={2} label={texts.VEHICLE_TAB_OPTION} />
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