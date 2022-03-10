import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { ticketFilterItems } from '../../../mock/Filter.mock';
import { TextsProvider } from '../../../translation/filter/ticket-filter';
import './TicketFilter.scss';

const texts = TextsProvider.get()

export function TicketFilter() {
    const [dateType, setDateType] = React.useState('');
    const [source, setSource] = React.useState('');
    const [media, setMedia] = React.useState('');

    return <div className="TicketFilter">
        <div className="TicketFilterAdjustFields">
            <div className="TicketFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.TICKET_NUMBER_LABEL}
                    className="TicketFilterAdjustTicketNumber"
                />
            </div>
            <div className="TicketFilterAdjustField">
                {ticketFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.DATE_TYPE_LABEL}
                        value={dateType}
                        items={item.ticket.type}
                        onChange={onChangeDateType}
                        className="TicketFilterAdjustDateType"
                    />
                })}
            </div>
            <div className="TicketFilterAdjustField">
                <SimpleDatePicker label={texts.DATE_START_LABEL} inputFormat={texts.DATE_FORMAT} className="TicketFilterAdjustStartDate" />
            </div>
            <div className="TicketFilterAdjustField">
                <SimpleDatePicker label={texts.DATE_END_LABEL} inputFormat={texts.DATE_FORMAT} className="TicketFilterAdjustEndDate" />
            </div>
            <div className="TicketFilterAdjustField">
                {ticketFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.SOURCE_LABEL}
                        value={source}
                        items={item.ticket.source}
                        onChange={onChangeSource}
                        className="TicketFilterAdjustSource"
                    />
                })}
            </div>
            <div className="TicketFilterAdjustField">
                {ticketFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.MEDIA_LABEL}
                        value={media}
                        items={item.ticket.media}
                        onChange={onChangeMedia}
                        className="TicketFilterAdjustMedia"
                    />
                })}
            </div>
        </div>
        <TicketFilterLostSalesInPeriod />
        <TicketFilterSuccessfulSalesInPeriod />
    </div>

    function onChangeDateType(event: SelectChangeEvent<string>) {
        setDateType(event.target.value);
    }

    function onChangeSource(event: SelectChangeEvent<string>) {
        setSource(event.target.value);
    }

    function onChangeMedia(event: SelectChangeEvent<string>) {
        setMedia(event.target.value);
    }
}

function TicketFilterLostSalesInPeriod() {
    return <div className="TicketFilterLostSalesInPeriod">
        <p className="TicketFilterLostSalesInPeriodLabel">
            {texts.LOST_SALES_IN_PERIOD_TITLE}
        </p>
        <div className="TicketFilterLostSalesInPeriodAdjustFields">
            <div className="TicketFilterLostSalesInPeriodAdjustField">
                <SimpleDatePicker label={texts.LOST_SALES_IN_PERIOD_DATE_START_LABEL} inputFormat={texts.DATE_FORMAT} className="TicketFilterLostSalesInPeriodStartDate" />
            </div>
            <div className="TicketFilterLostSalesInPeriodAdjustField">
                <SimpleDatePicker label={texts.LOST_SALES_IN_PERIOD_DATE_END_LABEL} inputFormat={texts.DATE_FORMAT} className="TicketFilterLostSalesInPeriodEndDate" />
            </div>
        </div>
    </div>
}

function TicketFilterSuccessfulSalesInPeriod() {
    return <div className="TicketFilterSuccessfulSalesInPeriod">
        <p className="TicketFilterSuccessfulSalesInPeriodLabel">
            {texts.SUCCESSFUL_SALES_IN_PERIOD_TITLE}
        </p>
        <div className="TicketFilterSuccessfulSalesInPeriodAdjustFields">
            <div className="TicketFilterSuccessfulSalesInPeriodAdjustField">
                <SimpleDatePicker label={texts.SUCCESSFUL_SALES_IN_PERIOD_DATE_START_LABEL} inputFormat={texts.DATE_FORMAT} className="TicketFilterSuccessfulSalesInPeriodStartDate" />
            </div>
            <div className="TicketFilterSuccessfulSalesInPeriodAdjustField">
                <SimpleDatePicker label={texts.SUCCESSFUL_SALES_IN_PERIOD_DATE_END_LABEL} inputFormat={texts.DATE_FORMAT} className="TicketFilterSuccessfulSalesInPeriodEndDate" />
            </div>
        </div>
    </div>
}