import { Alert, Button, Checkbox, FormControlLabel, FormGroup, SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../components/ComboBox/ComboBox';
import { Modal } from '../../components/Modal/Modal';
import { items } from '../../mock/GenerateTicketsForm.mock';
import { TextsProvider } from '../../translation/generate-ticket-form';
import './GenerateTicketForm.scss';

const texts = TextsProvider.get()

interface GenerateTicketFormProps {
    open: boolean
    onClose: () => void
}

export function GenerateTicketForm({ open, onClose }: GenerateTicketFormProps) {
    return <Modal
        title={texts.GENERATE_TICKET_MODAL_HEADER}
        defaultButtonText={texts.CANCEL_BUTTON_MODAL_FOOTER}
        secondaryButtonText={texts.GENERATE_BUTTON_MODAL_FOOTER}
        open={open}
        onClick={onClose}
        onClose={onClose}
        hasDivider
    >
        <GenerateTicketFormContent />
    </Modal>
}

function GenerateTicketFormContent() {
    const [ticketGroup, setTicketGroup] = React.useState('');
    const [eventType, setEventType] = React.useState('');

    return <div className="GenerateTicketForm">
        <div className="GenerateTicketFormAdjustSelect">
            <div>
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={ticketGroup}
                        label={texts.EVENT_GROUP}
                        onChange={onChangeEventGroup}
                        items={item.ticket.group}
                        className="GenerateTicketFormGroupEvent"
                    />
                })}
            </div>
            <div>
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={eventType}
                        label={texts.EVENT_TYPE}
                        onChange={onChangeEventType}
                        items={item.ticket.type}
                        className="GenerateTicketFormEventType"
                    />
                })}
            </div>
        </div>
        <div className="GenerateTicketFormAlert">
            <Alert
                severity="warning"
                action={
                    <Button
                        color="inherit"
                        size="small"
                        className="GenerateTicketFormDisregardCustomer">
                        {texts.DISREGARD_WARNING_BUTTON}
                    </Button>
                }>
                <span dangerouslySetInnerHTML={{ __html: texts.DISREGARD_WARNING_TEXT }} />
            </Alert>
        </div>
        <FormGroup className="GenerateTicketFormAdjustGenerateContacts">
            <FormControlLabel
                control={<Checkbox color="secondary" defaultChecked />}
                label={texts.GENERATE_CONTACTS_CHECKBOX_LABEL}
                className="GenerateTicketFormAdjustTypographyColor"
            />
        </FormGroup>
        <TextField
            type="number"
            size="small"
            label={texts.WORK_DAYS_LABEL}
            className="GenerateTicketFormAdjustWorkDaysTextField"
        />
        <div>
            <p className="GenerateTicketFormAdjustTypographyColor">{texts.CONSIDER_TITLE}</p>
            <FormGroup>
                <div className="GenerateTicketFormConsiderWeekDays">
                    <div className="GenerateTicketFormConsiderWeekDaysSpacing">
                        <FormControlLabel
                            control={<Checkbox color="secondary" />}
                            label={texts.SATURDAY_CHECKBOX_LABEL}
                            className="GenerateTicketFormAdjustTypographyColor"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<Checkbox color="secondary" />}
                            label={texts.SUNDAY_CHECKBOX_LABEL}
                            className="GenerateTicketFormAdjustTypographyColor"
                        />
                    </div>
                </div>
            </FormGroup>
        </div>
        <FormGroup className="GenerateTicketFormAdjustGenerateCompanyTicket">
            <FormControlLabel
                control={<Checkbox color="secondary" defaultChecked />}
                label={texts.GENERATE_TICKET_FOR_CUSTOMER_COMPANY_CHECKBOX_LABEL}
                className="GenerateTicketFormAdjustTypographyColor"
            />
        </FormGroup>
    </div>

    function onChangeEventGroup(event: SelectChangeEvent<string>) {
        setTicketGroup(event.target.value);
    }

    function onChangeEventType(event: SelectChangeEvent<string>) {
        setEventType(event.target.value);
    }
}