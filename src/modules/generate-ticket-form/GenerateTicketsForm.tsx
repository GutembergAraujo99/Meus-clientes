import { Alert, Button, Checkbox, FormControlLabel, FormGroup, SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../components/ComboBox/ComboBox';
import { Modal } from '../../components/Modal/Modal';
import { items } from '../../mock/GenerateTicketsForm.mock';
import './GenerateTicketForm.scss';

interface GenerateTicketFormProps {
    open: boolean
    onClose: () => void
}

export function GenerateTicketForm({ open, onClose }: GenerateTicketFormProps) {
    return <Modal
        title="Gerar Evento"
        content={<GenerateTicketFormContent />}
        defaultButtonText="Cancelar"
        secondaryButtonText="Gerar"
        open={open}
        onClose={onClose}
        hasDivider
    />
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
                        label="Grupo evento"
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
                        label="Tipo evento"
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
                        DESCONSIDERAR
                    </Button>
                }>
                <span>
                    Existem clientes com o mesmo tipo evento em aberto.<br />
                    Para desconsiderá-los, clique ao lado.
                </span>
            </Alert>
        </div>
        <FormGroup className="GenerateTicketFormAdjustGenerateContacts">
            <FormControlLabel
                control={<Checkbox color="secondary" defaultChecked />}
                label="Gerar contatos para mais de um dia"
                className="GenerateTicketFormAdjustTypographyColor"
            />
        </FormGroup>
        <TextField
            placeholder="Dias de trabalho"
            type="number"
            size="small"
            InputLabelProps={{ shrink: true }}
            className="GenerateTicketFormAdjustWorkDaysTextField"
        />
        <div>
            <p className="GenerateTicketFormAdjustTypographyColor" >Considerar</p>
            <FormGroup>
                <div className="GenerateTicketFormConsiderWeekDays">
                    <div className="GenerateTicketFormConsiderWeekDaysSpacing">
                        <FormControlLabel
                            control={<Checkbox color="secondary" />}
                            label="Sábado"
                            className="GenerateTicketFormAdjustTypographyColor"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<Checkbox color="secondary" />}
                            label="Domingo"
                            className="GenerateTicketFormAdjustTypographyColor"
                        />
                    </div>
                </div>
            </FormGroup>
        </div>
        <FormGroup className="GenerateTicketFormAdjustGenerateCompanyTicket">
            <FormControlLabel
                control={<Checkbox color="secondary" defaultChecked />}
                label="Gerar evento para empresa do cliente"
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