import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SimpleDatePicker } from '../../../components/DatePicker';
import './CustomerFilter.scss';

export function CustomerFilter() {
    const [personType, setPersonType] = React.useState('');
    const [source, setSource] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [customerType, setCustomerType] = React.useState('');
    const [occupationArea, setOccupationArea] = React.useState('');

    return <div className="CustomerFilter">
        <div className="CustomerFilterAdjustFields">
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Nome" className="CustomerFilterAdjustName" />
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="E-mail" className="CustomerFilterAdjustEmail" />
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Telefone" className="CustomerFilterAdjustPhone" />
            </div>
            <div className="CustomerFilterAdjustField">
                <FormControl size="small" className="CustomerFilterAdjustPersonType">
                    <InputLabel>Tipo pessoa</InputLabel>
                    <Select
                        id={uuid()}
                        value={personType}
                        label="Tipo pessoa"
                        onChange={onChangePersonType}
                    >
                        <MenuItem value={1}>Pessoa Física</MenuItem>
                        <MenuItem value={2}>Pessoa Jurídica</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="CPF" className="CustomerFilterAdjustCpf" />
            </div>
            <div className="CustomerFilterAdjustField">
                <FormControl size="small" className="CustomerFilterAdjustSource">
                    <InputLabel>Origem</InputLabel>
                    <Select
                        id={uuid()}
                        value={source}
                        label="Origem"
                        onChange={onChangeSource}
                    >
                        <MenuItem value={1}>Loja</MenuItem>
                        <MenuItem value={2}>Internet</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerFilterAdjustField">
                <FormControl size="small" className="CustomerFilterAdjustGender">
                    <InputLabel>Sexo</InputLabel>
                    <Select
                        id={uuid()}
                        value={gender}
                        label="Sexo"
                        onChange={onChangeGender}
                    >
                        <MenuItem value={1}>Masculino</MenuItem>
                        <MenuItem value={2}>Feminino</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerFilterAdjustField">
                <FormControl size="small" className="CustomerFilterAdjustCustomerType">
                    <InputLabel>Tipo de cliente</InputLabel>
                    <Select
                        id={uuid()}
                        value={customerType}
                        label="Tipo de cliente"
                        onChange={onChangeCustomerType}
                    >
                        <MenuItem value={1}>Tipo de cliente 1</MenuItem>
                        <MenuItem value={2}>Tipo de cliente 2</MenuItem>
                        <MenuItem value={3}>Tipo de cliente 3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerFilterAdjustField">
                <SimpleDatePicker label="Data Aniversário" className="CustomerFilterAdjustBirthday" />
            </div>
            <div className="CustomerFilterAdjustField">
                <FormControl size="small" className="CustomerFilterAdjustOccupationArea">
                    <InputLabel>Área de atuação</InputLabel>
                    <Select
                        id={uuid()}
                        value={occupationArea}
                        label="Área de atuação"
                        onChange={onChangeOccupationArea}
                    >
                        <MenuItem value={1}>Área de atuação 1</MenuItem>
                        <MenuItem value={2}>Área de atuação 2</MenuItem>
                        <MenuItem value={3}>Área de atuação 3</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <div>
            <CustomerFilterAddress />
        </div>
    </div>

    function onChangePersonType(event: SelectChangeEvent<string>) {
        setPersonType(event.target.value);
    }

    function onChangeSource(event: SelectChangeEvent<string>) {
        setSource(event.target.value);
    }

    function onChangeGender(event: SelectChangeEvent<string>) {
        setGender(event.target.value);
    }

    function onChangeCustomerType(event: SelectChangeEvent<string>) {
        setCustomerType(event.target.value);
    }

    function onChangeOccupationArea(event: SelectChangeEvent<string>) {
        setOccupationArea(event.target.value);
    }
}

function CustomerFilterAddress() {
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [country, setCountry] = React.useState('');

    return <div className="CustomerFilterAddress">
        <p className="CustomerFilterAddressLabel">Endereço</p>
        <div className="CustomerFilterAddressAdjustFields">
            <div className="CustomerFilterAddressAdjustField">
                <TextField variant="outlined" size="small" placeholder="Rua" className="CustomerFilterAddressAdjustStreet" />
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <TextField variant="outlined" size="small" placeholder="Bairro" className="CustomerFilterAddressAdjustDistrict" />
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <FormControl size="small" className="CustomerFilterAddressAdjustCity">
                    <InputLabel>Cidade</InputLabel>
                    <Select
                        id={uuid()}
                        value={city}
                        label="Cidade"
                        onChange={onChangeCity}
                    >
                        <MenuItem value={1}>Salto</MenuItem>
                        <MenuItem value={2}>Montenegro</MenuItem>
                        <MenuItem value={3}>Rio de Janeiro</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <FormControl size="small" className="CustomerFilterAddressAdjustState">
                    <InputLabel>Estado</InputLabel>
                    <Select
                        id={uuid()}
                        value={state}
                        label="Estado"
                        onChange={onChangeState}
                    >
                        <MenuItem value={1}>SP</MenuItem>
                        <MenuItem value={2}>RS</MenuItem>
                        <MenuItem value={3}>RJ</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <FormControl size="small" className="CustomerFilterAddressAdjustCountry">
                    <InputLabel>País</InputLabel>
                    <Select
                        id={uuid()}
                        value={country}
                        label="País"
                        onChange={onChangeCountry}
                    >
                        <MenuItem value={1}>Brasil</MenuItem>
                        <MenuItem value={2}>Estados Unidos</MenuItem>
                        <MenuItem value={3}>Espanha</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <TextField variant="outlined" size="small" placeholder="CEP" className="CustomerFilterAddressAdjustCep" />
            </div>
        </div>
    </div>

    function onChangeCity(event: SelectChangeEvent<string>) {
        setCity(event.target.value);
    }

    function onChangeState(event: SelectChangeEvent<string>) {
        setState(event.target.value);
    }

    function onChangeCountry(event: SelectChangeEvent<string>) {
        setCountry(event.target.value);
    }
}