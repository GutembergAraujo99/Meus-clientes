import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { ticketFilterItems } from '../../../mock/Filter.mock';
import './TicketFilter.scss';

export function TicketFilter() {
    const [dateType, setDateType] = React.useState('');
    const [source, setSource] = React.useState('');
    const [media, setMedia] = React.useState('');

    return <div className="TicketFilter">
        <div className="TicketFilterAdjustFields">
            <div className="TicketFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="N° do evento" className="TicketFilterAdjustTicketNumber" />
            </div>
            <div className="TicketFilterAdjustField">
                {ticketFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Tipo de data"
                        value={dateType}
                        items={item.ticket.type}
                        onChange={onChangeDateType}
                        className="TicketFilterAdjustDateType"
                    />
                })}
            </div>
            <div className="TicketFilterAdjustField">
                <SimpleDatePicker label="Data início" className="TicketFilterAdjustStartDate" />
            </div>
            <div className="TicketFilterAdjustField">
                <SimpleDatePicker label="Data fim" className="TicketFilterAdjustEndDate" />
            </div>
            <div className="TicketFilterAdjustField">
                {ticketFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Origem"
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
                        label="Mídia"
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
            Vendas perdidas no período
        </p>
        <div className="TicketFilterLostSalesInPeriodAdjustFields">
            <div className="TicketFilterLostSalesInPeriodAdjustField">
                <SimpleDatePicker label="Data início" className="TicketFilterLostSalesInPeriodStartDate" />
            </div>
            <div className="TicketFilterLostSalesInPeriodAdjustField">
                <SimpleDatePicker label="Data fim" className="TicketFilterLostSalesInPeriodEndDate" />
            </div>
        </div>
    </div>
}

function TicketFilterSuccessfulSalesInPeriod() {
    return <div className="TicketFilterSuccessfulSalesInPeriod">
        <p className="TicketFilterSuccessfulSalesInPeriodLabel">
            Vendas no período
        </p>
        <div className="TicketFilterSuccessfulSalesInPeriodAdjustFields">
            <div className="TicketFilterSuccessfulSalesInPeriodAdjustField">
                <SimpleDatePicker label="Data início" className="TicketFilterSuccessfulSalesInPeriodStartDate" />
            </div>
            <div className="TicketFilterSuccessfulSalesInPeriodAdjustField">
                <SimpleDatePicker label="Data fim" className="TicketFilterSuccessfulSalesInPeriodEndDate" />
            </div>
        </div>
    </div>
}