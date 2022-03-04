import { Alert, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { Modal } from '../../components/Modal/Modal';
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
    />
}

function GenerateTicketFormContent() {
    const [ticketGroup, setTicketGroup] = React.useState('');
    const [eventType, setEventType] = React.useState('');

    return <div className="GenerateTicketForm">
        <div className="GenerateTicketFormAdjustSelect">
            <div>
                <FormControl size="small" fullWidth>
                    <InputLabel>Grupo evento</InputLabel>
                    <Select
                        id={uuid()}
                        value={ticketGroup}
                        label="Grupo evento"
                        onChange={onChangeEventGroup}
                        className="GenerateTicketFormGroupEvent"
                    >
                        <MenuItem value={1}>Grupo evento 1</MenuItem>
                        <MenuItem value={2}>Grupo evento 2</MenuItem>
                        <MenuItem value={3}>Grupo evento 3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl size="small" fullWidth>
                    <InputLabel>Tipo evento</InputLabel>
                    <Select
                        id={uuid()}
                        value={eventType}
                        label="Tipo evento"
                        onChange={onChangeEventType}
                        className="GenerateTicketFormEventType"
                    >
                        <MenuItem value={1}>Tipo evento 1</MenuItem>
                        <MenuItem value={2}>Tipo evento 2</MenuItem>
                        <MenuItem value={3}>Tipo evento 3</MenuItem>
                    </Select>
                </FormControl>
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