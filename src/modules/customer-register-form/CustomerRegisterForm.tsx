import { IconButton, SelectChangeEvent, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import * as React from 'react';
import InputMask from 'react-input-mask';
import { ComboBox } from '../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../components/DatePicker/DatePicker';
import { Modal } from '../../components/Modal/Modal';
import { items } from '../../mock/CustomerRegisterForm.mock';
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
        onClose={onClose}
        hasDivider
    />
}

function CustomerRegisterFormContent() {
    return <>
        <CustomerRegisterFormPersonalData />
        <CustomerRegisterFormContact />
        <CustomerRegisterFormAddress />
    </>
}

function CustomerRegisterFormPersonalData() {
    const [cpf, setCpf] = React.useState('');
    const [personType, setPersonType] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [source, setSource] = React.useState('');

    return <div className="CustomerRegisterFormPersonalData">
        <TextField
            variant="outlined"
            size="small"
            placeholder="Nome completo"
            className="CustomerRegisterFormPersonalDataAdjustNameField"
        />
        <div className="CustomerRegisterFormPersonalDataAdjustFields">
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={personType}
                        label="Tipo de pessoa"
                        onChange={onChangePersonType}
                        items={item.customer.personType}
                        className="CustomerRegisterFormPersonalDataPersonTypeField"
                    />
                })}
            </div>
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                <InputMask mask="999.999.999-99" value={cpf} onChange={onChangeCpf}>
                    {() => <TextField
                        variant="outlined"
                        size="small"
                        placeholder="000.000.000-00"
                        className="CustomerRegisterFormPersonalDataCpfField"
                    />}
                </InputMask>
            </div>
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                <SimpleDatePicker label="Data nascimento" className="CustomerRegisterFormPersonalDataBirthDayField" />
            </div>
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={gender}
                        label="Sexo"
                        items={item.customer.gender}
                        onChange={onChangeGender}
                        className="CustomerRegisterFormPersonalDataGenderField"
                    />
                })}
            </div>
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={source}
                        label="Origem"
                        items={item.customer.source}
                        onChange={onChangeSource}
                        className="CustomerRegisterFormPersonalDataSourceField"
                    />
                })}
            </div>
        </div>
    </div>

    function onChangeCpf(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setCpf((event.target as HTMLInputElement).value);
    }

    function onChangePersonType(event: SelectChangeEvent<string>) {
        setPersonType(event.target.value);
    }

    function onChangeGender(event: SelectChangeEvent<string>) {
        setGender(event.target.value);
    }

    function onChangeSource(event: SelectChangeEvent<string>) {
        setSource(event.target.value);
    }
}

function CustomerRegisterFormContact() {
    const [phoneType, setPhoneType] = React.useState('');
    const [email, setEmail] = React.useState('');

    return <div className="CustomerRegisterFormContact">
        <p className="CustomerRegisterFormContactAdjustTitleFont">Contatos</p>
        <div className="CustomerRegisterFormContactAdjustTitle">
            <p className="CustomerRegisterFormContactAdjustSubTitleFont">Telefones</p>
            <p className="CustomerRegisterFormContactAdjustSubTitleFont">E-mails</p>
        </div>
        <div className="CustomerRegisterFormContactAdjustFields">
            <div className="CustomerRegisterFormContactAdjustPosition">
                <div className="CustomerRegisterFormContactSpacingBetweenFields">
                    {items.map((item, index) => {
                        return <ComboBox
                            key={index}
                            value={phoneType}
                            label="Tipo de telefone"
                            items={item.customer.phoneType}
                            onChange={onChangePhoneType}
                            className="CustomerRegisterFormContactPhoneTypeField"
                        />
                    })}
                </div>
                <div className="CustomerRegisterFormContactSpacingBetweenFieldAndIcon">
                    <TextField
                        type="tel"
                        variant="outlined"
                        size="small"
                        placeholder="Informe seu telefone"
                        className="CustomerRegisterFormContactPhoneField"
                    />
                </div>
                <div>
                    <IconButton color="secondary">
                        <AddCircleIcon />
                    </IconButton>
                </div>
            </div>
            <div className="CustomerRegisterFormContactAdjustPosition">
                <div className="CustomerRegisterFormContactSpacingBetweenFieldAndIcon">
                    <TextField
                        type="email"
                        variant="outlined"
                        size="small"
                        placeholder="Informe seu e-mail"
                        value={email}
                        onChange={onChangeEmail}
                        error={!email}
                        className="CustomerRegisterFormContactEmailField"
                    />
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

    function onChangeEmail(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const emailValidator = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{4})+$/;

        if (emailValidator.test(event.target.value)) {
            return true;
        }

        setEmail(event.target.value);
    }
}

function CustomerRegisterFormAddress() {
    const [publicPlace, setPublicPlace] = React.useState('');
    const [state, setState] = React.useState('');
    const [city, setCity] = React.useState('');
    const [cep, setCep] = React.useState('');

    return <div className="CustomerRegisterFormAddress">
        <p className="CustomerRegisterFormAddressAdjustTitleFont">Endereço</p>
        <div className="CustomerRegisterFormAddressAdjustFields">
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={publicPlace}
                        label="Tipo logradouro"
                        items={item.customer.publicPlace}
                        onChange={onChangePublicPlace}
                        className="CustomerRegisterFormAddressAdjustPublicPlaceField"
                    />
                })}
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField variant="outlined" size="small" placeholder="Nome do logradouro" className="CustomerRegisterFormAddressAdjustPublicPlaceNameField" />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    placeholder="Número"
                    InputLabelProps={{ shrink: true }}
                    className="CustomerRegisterFormAddressAdjustPublicPlaceNumberField"
                />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField variant="outlined" size="small" placeholder="País" className="CustomerRegisterFormAddressAdjustCountryField" />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={state}
                        label="Estado"
                        onChange={onChangeState}
                        items={item.customer.state}
                        className="CustomerRegisterFormAddressAdjustStateField"
                    />
                })}
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={city}
                        label="Cidade"
                        onChange={onChangeCity}
                        items={item.customer.city}
                        className="CustomerRegisterFormAddressAdjustCityField"
                    />
                })}
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField variant="outlined" size="small" placeholder="Bairro" className="CustomerRegisterFormAddressAdjustDistrictField" />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <InputMask mask="99999-999" value={cep} onChange={onChangeCep}>
                    {() => <TextField
                        variant="outlined"
                        size="small"
                        placeholder="CEP"
                        className="CustomerRegisterFormAddressAdjustCepField"
                    />}
                </InputMask>
            </div>
        </div>
    </div>

    function onChangePublicPlace(event: SelectChangeEvent<string>) {
        setPublicPlace(event.target.value);
    }

    function onChangeState(event: SelectChangeEvent<string>) {
        setState(event.target.value);
    }

    function onChangeCity(event: SelectChangeEvent<string>) {
        setCity(event.target.value);
    }

    function onChangeCep(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setCep((event.target as HTMLInputElement).value);
    }
}