import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { Modal } from '../../components/Modal';
import './CustomerRegisterForm.scss';

interface CustomerRegisterFormProps {
    open: boolean
    onClose: () => void
}

export function CustomerRegisterForm({ open, onClose }: CustomerRegisterFormProps) {
    return <Modal
        title="Cadastro do Cliente"
        content={<CustomerRegisterFormContent />}
        defaultButtonText="Cancelar"
        secondaryButtonText="Salvar"
        open={open}
        handleClose={onClose}
    />
}

function CustomerRegisterFormContent() {
    const [personType, setPersonType] = React.useState('');

    return <div className="CustomerRegisterForm">
        <TextField
            variant="outlined"
            size="small"
            placeholder="Nome completo"
            className="CustomerRegisterFormAdjustNameField"
        />
        <div className="CustomerRegisterFormAdjustFields">
            <div className="CustomerRegisterFormAdjustFieldPosition">
                <FormControl size="small" className="CustomerRegisterFormPersonTypeField">
                    <InputLabel>Tipo de pessoa</InputLabel>
                    <Select
                        id={uuid()}
                        value={personType}
                        label="Tipo de pessoa"
                        onChange={onChangePersonType}
                    >
                        <MenuItem value={1}>Tipo de pessoa 1</MenuItem>
                        <MenuItem value={2}>Tipo de pessoa 2</MenuItem>
                        <MenuItem value={3}>Tipo de pessoa 3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerRegisterFormAdjustFieldPosition">
                <TextField variant="outlined" size="small" placeholder="000.000.000-00" className="CustomerRegisterFormCpfField" />
            </div>
            <div className="CustomerRegisterFormAdjustFieldPosition">
                <TextField variant="outlined" size="small" placeholder="Data nascimento" className="CustomerRegisterFormBirthDayField" />
            </div>
            <div className="CustomerRegisterFormAdjustFieldPosition">
                <FormControl size="small" className="CustomerRegisterFormGenderField">
                    <InputLabel>Sexo</InputLabel>
                    <Select
                        id={uuid()}
                        value={personType}
                        label="Sexo"
                        onChange={onChangePersonType}
                    >
                        <MenuItem value={1}>Masculino</MenuItem>
                        <MenuItem value={2}>Feminino</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerRegisterFormAdjustFieldPosition">
                <FormControl size="small" className="CustomerRegisterFormSourceField">
                    <InputLabel>Origem</InputLabel>
                    <Select
                        id={uuid()}
                        value={personType}
                        label="Origem"
                        onChange={onChangePersonType}
                    >
                        <MenuItem value={1}>Loja</MenuItem>
                        <MenuItem value={2}>Internet</MenuItem>
                        <MenuItem value={3}>Feirão</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <div>
            <CustomerRegisterFormContact />
        </div>
    </div>

    function onChangePersonType(event: SelectChangeEvent<string>) {
        setPersonType(event.target.value)
    }
}

function CustomerRegisterFormContact() {
    const [phoneType, setPhoneType] = React.useState('');

    return <div className="CustomerRegisterFormContact">
        <p>Contatos</p>
        <div className="CustomerRegisterFormContactAdjustTitle">
            <p>Telefones</p>
            <p>E-mails</p>
        </div>
        <div className="CustomerRegisterFormContactAdjustFields">
            <div className="CustomerRegisterFormContactAdjustPosition">
                <div className="CustomerRegisterFormContactSpacingBetweenFields">
                    <FormControl size="small" className="CustomerRegisterFormContactPhoneTypeField">
                        <InputLabel>Tipo de telefone</InputLabel>
                        <Select
                            id={uuid()}
                            value={phoneType}
                            label="Tipo de telefone"
                            onChange={onChangePhoneType}
                        >
                            <MenuItem value={1}>Telefone Comercial</MenuItem>
                            <MenuItem value={2}>Telefone Residencial</MenuItem>
                            <MenuItem value={3}>Telefone Pessoal</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="CustomerRegisterFormContactSpacingBetweenFieldAndIcon">
                    <TextField variant="outlined" size="small" placeholder="Informe seu telefone" className="CustomerRegisterFormContactPhoneField" />
                </div>
                <div>
                    <IconButton color="secondary">
                        <AddCircleIcon />
                    </IconButton>
                </div>
            </div>
            <div className="CustomerRegisterFormContactAdjustPosition">
                <div className="CustomerRegisterFormContactSpacingBetweenFieldAndIcon">
                    <TextField variant="outlined" size="small" placeholder="Informe seu e-mail" className="CustomerRegisterFormContactEmailField" />
                </div>
                <div>
                    <IconButton color="secondary">
                        <AddCircleIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    </div>

    function onChangePhoneType(event: SelectChangeEvent<string>) {
        setPhoneType(event.target.value);
    }
}