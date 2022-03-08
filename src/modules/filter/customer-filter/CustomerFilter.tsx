import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { customerFilterItems } from '../../../mock/Filter.mock';
import { TextsProvider } from '../../../translation/filter/customer-filter';
import './CustomerFilter.scss';

const texts = TextsProvider.get()

export function CustomerFilter() {
    const [personType, setPersonType] = React.useState('');
    const [source, setSource] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [customerType, setCustomerType] = React.useState('');
    const [occupationArea, setOccupationArea] = React.useState('');

    return <div className="CustomerFilter">
        <div className="CustomerFilterAdjustFields">
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.NAME_PLACEHOLDER} className="CustomerFilterAdjustName" />
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.EMAIL_PLACEHOLDER} className="CustomerFilterAdjustEmail" />
            </div>
            <div className="CustomerFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.PHONE_PLACEHOLDER} className="CustomerFilterAdjustPhone" />
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
                <TextField variant="outlined" size="small" placeholder={texts.CPF_LABEL} className="CustomerFilterAdjustCpf" />
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
                <SimpleDatePicker label={texts.BIRTHDAY_LABEL} className="CustomerFilterAdjustBirthday" />
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
                <TextField variant="outlined" size="small" placeholder={texts.STREET_PLACEHOLDER} className="CustomerFilterAddressAdjustStreet" />
            </div>
            <div className="CustomerFilterAddressAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.DISTRICT_PLACEHOLDER} className="CustomerFilterAddressAdjustDistrict" />
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
                <TextField variant="outlined" size="small" placeholder={texts.COUNTRY_LABEL} className="CustomerFilterAddressAdjustCep" />
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