import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { customerFilterItems } from '../../../mock/Filter.mock';
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
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Tipo pessoa"
                        value={personType}
                        onChange={onChangePersonType}
                        items={item.customer.personType}
                        className="CustomerFilterAdjustPersonType"
                    />
                })}
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="CPF" className="CustomerFilterAdjustCpf" />
            </div>
            <div className="CustomerFilterAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Origem"
                        value={source}
                        onChange={onChangeSource}
                        items={item.customer.source}
                        className="CustomerFilterAdjustSource"
                    />
                })}
            </div>
            <div className="CustomerFilterAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Sexo"
                        value={gender}
                        onChange={onChangeGender}
                        items={item.customer.gender}
                        className="CustomerFilterAdjustGender"
                    />
                })}
            </div>
            <div className="CustomerFilterAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Tipo de cliente"
                        value={customerType}
                        onChange={onChangeCustomerType}
                        items={item.customer.type}
                        className="CustomerFilterAdjustCustomerType"
                    />
                })}
            </div>
            <div className="CustomerFilterAdjustField">
                <SimpleDatePicker label="Data Aniversário" className="CustomerFilterAdjustBirthday" />
            </div>
            <div className="CustomerFilterAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Área de atuação"
                        value={occupationArea}
                        onChange={onChangeOccupationArea}
                        items={item.customer.occupationArea}
                        className="CustomerFilterAdjustOccupationArea"
                    />
                })}
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
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Cidade"
                        value={city}
                        onChange={onChangeCity}
                        items={item.customer.address.city}
                        className="CustomerFilterAddressAdjustCity"
                    />
                })}
            </div>
            <div className="CustomerFilterAddressAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Estado"
                        value={state}
                        onChange={onChangeState}
                        items={item.customer.address.state}
                        className="CustomerFilterAddressAdjustState"
                    />
                })}
            </div>
            <div className="CustomerFilterAddressAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="País"
                        value={country}
                        onChange={onChangeCountry}
                        items={item.customer.address.country}
                        className="CustomerFilterAddressAdjustCountry"
                    />
                })}
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