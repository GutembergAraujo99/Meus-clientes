import { IconButton, SelectChangeEvent, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
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
        defaultButtonText={texts.CANCEL_BUTTON_MODAL_FOOTER}
        secondaryButtonText={texts.SAVE_BUTTON_MODAL_FOOTER}
        open={open}
        onClose={onClose}
        hasDivider
    >
        <CustomerRegisterFormContent />
    </Modal>
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
    const [cnpj, setCnpj] = React.useState('');
    const [personType, setPersonType] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [source, setSource] = React.useState('');

    let mask = '';
    let placeholderMask = '';
    let value: string | number | readonly string[] | null | undefined = null;
    if (+personType === 0) {
        mask = '999.999.999-99';
        placeholderMask = '000.000.000-00';
        value = cpf;
    } else {
        mask = '99.999.999/9999-99';
        placeholderMask = '00.000.000/0000-00';
        value = cnpj;
    }

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
                <InputMask mask={mask} value={value} onChange={onChangeDocument}>
                    {() => <TextField
                        variant="outlined"
                        size="small"
                        placeholder={placeholderMask}
                        className="CustomerRegisterFormPersonalDataCpfField"
                    />}
                </InputMask>
            </div>
            <div className="CustomerRegisterFormPersonalDataAdjustFieldPosition">
                <SimpleDatePicker label={texts.BIRTHDATE_LABEL} inputFormat={texts.DATE_FORMAT} className="CustomerRegisterFormPersonalDataBirthDayField" />
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

    function onChangeGender(event: SelectChangeEvent<string>) {
        setGender(event.target.value);
    }

    function onChangeSource(event: SelectChangeEvent<string>) {
        setSource(event.target.value);
    }
}

function CustomerRegisterFormContact() {
    const [phoneList, setPhoneList] = React.useState(['']);
    const [phoneNumber, setPhoneNumber] = React.useState(['']);
    const [emailList, setEmailList] = React.useState(['']);

    return <div className="CustomerRegisterFormContact">
        <p className="CustomerRegisterFormContactAdjustTitleFont">{texts.CONTACTS_TITLE}</p>
        <div className="CustomerRegisterFormContactAdjustTitle">
            <div className="CustomerRegisterFormContactAdjustSubTitleFont">{texts.PHONES_TITLE}</div>
            <div className="CustomerRegisterFormContactAdjustSubTitleFont">{texts.EMAILS_TITLE}</div>
        </div>
        <div className="CustomerRegisterFormContactAdjustFields">
            <div className="CustomerRegisterFormContactSpacingBetweenFields">
                {phoneList.map((phone, index) => {
                    return <div key={index} className="CustomerRegisterFormContactFieldContainer">
                        {items.map((item, itemIndex) => {
                            return <ComboBox
                                key={itemIndex}
                                value={phone}
                                label={texts.PHONE_TYPE_LABEL}
                                items={item.customer.phoneType}
                                onChange={(e) => onChangePhoneType(e, index)}
                                className="CustomerRegisterFormContactPhoneTypeField"
                            />
                        })}
                        <div className="CustomerRegisterFormContactSpacingBetweenFieldAndIcon">
                            <TextField
                                type="tel"
                                variant="outlined"
                                size="small"
                                placeholder={texts.TYPE_YOUR_PHONE_PLACEHOLDER}
                                onChange={(e) => onChangePhone(e, index)}
                                className="CustomerRegisterFormContactPhoneField"
                            />
                        </div>
                        <div>
                            <IconButton color="secondary" onClick={onAddNewPhoneField}>
                                <AddCircleIcon />
                            </IconButton>
                        </div>
                        {index > 0 &&
                            <div>
                                <IconButton color="error" onClick={() => onRemovePhoneFields(index)}>
                                    <RemoveCircleIcon />
                                </IconButton>
                            </div>
                        }
                    </div>
                })}
            </div>
            <div className="CustomerRegisterFormContactAdjustEmailPosition">
                <div className="CustomerRegisterFormContactSpacingBetweenFieldAndIcon">
                    {emailList.map((email, index) => {
                        return <div key={index} className="CustomerRegisterFormContactAdjustRemoveButton">
                            <div className="CustomerRegisterFormContactEmailFieldPosition">
                                <TextField
                                    type="email"
                                    variant="outlined"
                                    size="small"
                                    placeholder={texts.TYPE_YOUR_EMAIL_PLACEHOLDER}
                                    value={email}
                                    onChange={(e) => onChangeEmail(e, index)}
                                    className="CustomerRegisterFormContactEmailField"
                                />
                            </div>
                            <div>
                                <IconButton color="secondary" onClick={onAddNewEmailField}>
                                    <AddCircleIcon />
                                </IconButton>
                            </div>
                            {index > 0 &&
                                <div>
                                    <IconButton color="error" onClick={() => onRemoveEmailField(index)}>
                                        <RemoveCircleIcon />
                                    </IconButton>
                                </div>
                            }
                        </div>

                    })}
                </div>
            </div>
        </div>
    </div>

    function onChangePhoneType(event: SelectChangeEvent<string>, index: number) {
        phoneList[index] = event.target.value;
        setPhoneList([...phoneList]);
    }

    function onChangePhone(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
        phoneNumber[index] = event.target.value;
        setPhoneNumber([...phoneNumber]);
    }

    function onAddNewPhoneField() {
        setPhoneList([...phoneList, '']);
    }

    function onRemovePhoneFields(index: number) {
        const list = [...phoneList];
        list.splice(index, 1);
        setPhoneList(list);
    }

    function onChangeEmail(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
        emailList[index] = event.target.value;
        setEmailList([...emailList]);
    }

    function onAddNewEmailField() {
        setEmailList([...emailList, '']);
    }

    function onRemoveEmailField(index: number) {
        const list = [...emailList];
        list.splice(index, 1);
        setEmailList(list);
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
        setCep(event.target.value);
    }
}