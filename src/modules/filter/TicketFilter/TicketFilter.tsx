import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker';
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
                <ComboBox
                    label="Tipo de data"
                    value={dateType}
                    item={'Tipo de data 1'}
                    onChange={onChangeDateType}
                    className="TicketFilterAdjustDateType"
                />
            </div>
            <div className="TicketFilterAdjustField">
                <SimpleDatePicker label="Data início" className="TicketFilterAdjustStartDate" />
            </div>
            <div className="TicketFilterAdjustField">
                <SimpleDatePicker label="Data fim" className="TicketFilterAdjustEndDate" />
            </div>
            <div className="TicketFilterAdjustField">
                <ComboBox
                    label="Origem"
                    value={source}
                    item={'Internet'}
                    onChange={onChangeSource}
                    className="TicketFilterAdjustSource"
                />
            </div>
            <div className="TicketFilterAdjustField">
                <ComboBox
                    label="Mídia"
                    value={media}
                    item={'Facebook'}
                    onChange={onChangeMedia}
                    className="TicketFilterAdjustMedia"
                />
            </div>
        </div>
        <TicketFilterLostSalesInPeriod />
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