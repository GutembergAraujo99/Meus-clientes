import { TextField } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import * as React from 'react';
import { ActionButton } from '../components/ActionButton/ActionButton';
import { TextsProvider } from '../translation/main';
import { CustomerListing } from './customer-listing/CustomerListing';
import { CustomerRegisterForm } from './customer-register-form/CustomerRegisterForm';
import { Filter } from './filter/Filter';
import './Main.scss';

const texts = TextsProvider.get()

export function Main() {
    const [openCustomerRegister, setOpenCustomerRegister] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);

    return <div className="Main">
        <h2 className="MainTitleHeader">{texts.MY_CUSTOMERS}</h2>
        <div className="MainCard">
            <div className="MainCardHeader">
                <div>
                    <TextField variant="outlined" size="small" placeholder={texts.SEARCH_FIELD} className="MainCardHeaderAdjustTextField" />
                    <span className="MainCardHeaderAdjustButtonPosition">
                        <ActionButton icon={<FilterListIcon />} text={texts.FILTERS} onClick={onOpenFilter} />
                    </span>
                </div>
                <div>
                    <ActionButton color="secondary" icon={<PersonAddIcon />} text={texts.CUSTOMER} onClick={onOpenCustomerRegister} />
                </div>
            </div>
            <div className="MainCardContent">
                <CustomerListing />
            </div>
        </div>
        <Filter open={openFilter} onClose={onCloseFilter} />
        <CustomerRegisterForm open={openCustomerRegister} onClose={onCloseCustomerRegister} />
    </div>

    function onOpenFilter() {
        setOpenFilter(true);
    }

    function onCloseFilter() {
        setOpenFilter(false);
    }

    function onOpenCustomerRegister() {
        setOpenCustomerRegister(true);
    }

    function onCloseCustomerRegister() {
        setOpenCustomerRegister(false);
    }
}