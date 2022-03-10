import { SelectChangeEvent, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { customerFilterItems } from '../../../mock/Filter.mock';
import { TextsProvider } from '../../../translation/filter/customer-filter';
import './CustomerFilter.scss';

const texts = TextsProvider.get()

export function CustomerFilter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [personType, setPersonType] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [source, setSource] = useState('');
    const [gender, setGender] = useState('');
    const [customerType, setCustomerType] = useState('');
    const [occupationArea, setOccupationArea] = useState('');

    let mask = '';
    let labelMask = '';
    let value: string | number | readonly string[] | null | undefined = null;
    if (+personType === 0) {
        mask = '999.999.999-99';
        labelMask = texts.CPF_LABEL;
        value = cpf;
    } else {
        mask = '99.999.999/9999-99';
        labelMask = texts.CNPJ_LABEL;
        value = cnpj;
    }

    return <div className="CustomerFilter">
        <div className="CustomerFilterAdjustFields">
            <div className="CustomerFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.NAME_LABEL}
                    value={name}
                    onChange={onChangeName}
                    className="CustomerFilterAdjustName"
                />
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.EMAIL_LABEL}
                    value={email}
                    onChange={onChangeEmail}
                    className="CustomerFilterAdjustEmail"
                />
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.PHONE_LABEL}
                    value={phone}
                    onChange={onChangePhone}
                    className="CustomerFilterAdjustPhone"
                />
            </div>
            <div className="CustomerFilterAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.PERSON_TYPE_LABEL}
                        value={personType}
                        onChange={onChangePersonType}
                        items={item.customer.personType}
                        className="CustomerFilterAdjustPersonType"
                    />
                })}
            </div>
            <div className="CustomerFilterAdjustField">
                <InputMask mask={mask} value={value} onChange={onChangeDocument}>
                    {() => <TextField
                        variant="outlined"
                        size="small"
                        label={labelMask}
                        className="CustomerFilterAdjustCpf" />
                    }
                </InputMask>
            </div>
            <div className="CustomerFilterAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.SOURCE_LABEL}
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
                        label={texts.GENDER_LABEL}
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
                        label={texts.CUSTOMER_TYPE_LABEL}
                        value={customerType}
                        onChange={onChangeCustomerType}
                        items={item.customer.type}
                        className="CustomerFilterAdjustCustomerType"
                    />
                })}
            </div>
            <div className="CustomerFilterAdjustField">
                <SimpleDatePicker label={texts.BIRTHDAY_LABEL} inputFormat={texts.DATE_FORMAT} className="CustomerFilterAdjustBirthday" />
            </div>
            <div className="CustomerFilterAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.OCCUPATION_AREA_LABEL}
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

    function onChangeName(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setName(event.target.value);
    }

    function onChangeEmail(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function onChangePhone(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setPhone(event.target.value);
    }

    function onChangeDocument(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        if (value === cpf) {
            setCpf(event.target.value);
        } else {
            setCnpj(event.target.value);
        }
    }

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
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [cep, setCep] = useState('');

    return <div className="CustomerFilterAddress">
        <p className="CustomerFilterAddressLabel">{texts.ADDRESS_TITLE}</p>
        <div className="CustomerFilterAddressAdjustFields">
            <div className="CustomerFilterAddressAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.STREET_LABEL}
                    className="CustomerFilterAddressAdjustStreet"
                />
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.DISTRICT_LABEL}
                    className="CustomerFilterAddressAdjustDistrict"
                />
            </div>
            <div className="CustomerFilterAddressAdjustField">
                {customerFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.CITY_LABEL}
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
                        label={texts.STATE_LABEL}
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
                        label={texts.COUNTRY_LABEL}
                        value={country}
                        onChange={onChangeCountry}
                        items={item.customer.address.country}
                        className="CustomerFilterAddressAdjustCountry"
                    />
                })}
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <InputMask mask="99999-999" value={cep} onChange={onChangeCep}>
                    {() => <TextField
                        variant="outlined"
                        size="small"
                        label={texts.CEP_LABEL}
                        className="CustomerFilterAddressAdjustCep"
                    />}
                </InputMask>
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

    function onChangeCep(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setCep(event.target.value);
    }
}