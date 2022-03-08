import { IconButton, SelectChangeEvent, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import * as React from 'react';
import InputMask from 'react-input-mask';
import { ComboBox } from '../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../components/DatePicker/DatePicker';
import { Modal } from '../../components/Modal/Modal';
import { items } from '../../mock/CustomerRegisterForm.mock';
import { TextsProvider } from '../../translation/customer-register-form';
import './CustomerRegisterForm.scss';

const texts = TextsProvider.get()

interface CustomerRegisterFormProps {
    open: boolean
    onClose: () => void
}

export function CustomerRegisterForm({ open, onClose }: CustomerRegisterFormProps) {
    return <Modal
        title={texts.CUSTOMER_REGISTER_MODAL_HEADER}
        content={<CustomerRegisterFormContent />}
        defaultButtonText={texts.CANCEL_BUTTON_MODAL_FOOTER}
        secondaryButtonText={texts.SAVE_BUTTON_MODAL_FOOTER}
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
            placeholder={texts.FULL_NAME_PLACEHOLDER}
            className="CustomerRegisterFormPersonalDataAdjustNameField"
        />
        <div className="CustomerRegisterFormPersonalDataAdjustFields">
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={personType}
                        label={texts.PERSON_TYPE_PLACEHOLDER}
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
                <SimpleDatePicker label={texts.BIRTHDATE_LABEL} className="CustomerRegisterFormPersonalDataBirthDayField" />
            </div>
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={gender}
                        label={texts.GENDER_LABEL}
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
                        label={texts.SOURCE_LABEL}
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
                            label={texts.PHONE_TYPE_LABEL}
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
                        placeholder={texts.TYPE_YOUR_PHONE_PLACEHOLDER}
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
                        placeholder={texts.TYPE_YOUR_EMAIL_PLACEHOLDER}
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
                        label={texts.PUBLIC_PLACE_LABEL}
                        items={item.customer.publicPlace}
                        onChange={onChangePublicPlace}
                        className="CustomerRegisterFormAddressAdjustPublicPlaceField"
                    />
                })}
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField variant="outlined" size="small" placeholder={texts.PUBLIC_PLACE_PLACEHOLDER} className="CustomerRegisterFormAddressAdjustPublicPlaceNameField" />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    placeholder={texts.PLACE_NUMBER_PLACEHOLDER}
                    InputLabelProps={{ shrink: true }}
                    className="CustomerRegisterFormAddressAdjustPublicPlaceNumberField"
                />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField variant="outlined" size="small" placeholder={texts.COUNTRY_PLACEHOLDER} className="CustomerRegisterFormAddressAdjustCountryField" />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                {items.map((item, index) => {
                    return <ComboBox
                        key={index}
                        value={state}
                        label={texts.STATE_LABEL}
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
                        label={texts.CITY_LABEL}
                        onChange={onChangeCity}
                        items={item.customer.city}
                        className="CustomerRegisterFormAddressAdjustCityField"
                    />
                })}
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <TextField variant="outlined" size="small" placeholder={texts.DISTRICT_PLACEHOLDER} className="CustomerRegisterFormAddressAdjustDistrictField" />
            </div>
            <div className="CustomerRegisterFormAddressSpacingBetweenFields">
                <InputMask mask="99999-999" value={cep} onChange={onChangeCep}>
                    {() => <TextField
                        variant="outlined"
                        size="small"
                        placeholder={texts.CEP_PLACEHOLDER}
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