import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { vehicleFilterItems } from '../../../mock/Filter.mock';
import './VehicleFilter.scss';

export function VehicleFilter() {
    const [hasVehicle, setHasVehicle] = React.useState('');

    return <div className="VehicleFilter">
        <div className="VehicleFilterAdjustFields">
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Marca" className="VehicleFilterBrand" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Modelo" className="VehicleFilterModel" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Versão" className="VehicleFilterVersion" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Ano modelo" className="VehicleFilterModelYear" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Placa" className="VehicleFilterPlate" />
            </div>
            <div className="VehicleFilterAdjustField">
                {vehicleFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label="Possui veículo"
                        value={hasVehicle}
                        items={item.vehicle.hasVehicle}
                        onChange={onChangeHasVehicle}
                        className="VehicleFilterHasVehicle"
                    />
                })}
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder="Chassi" className="VehicleFilterChassis" />
            </div>
            <div className="VehicleFilterAdjustField">
                <SimpleDatePicker label="Data da venda" className="VehicleFilterSaleDate" />
            </div>
            <div className="VehicleFilterAdjustField">
                <SimpleDatePicker label="Data da nota" className="VehicleFilterInvoiceDate" />
            </div>
        </div>
    </div>

    function onChangeHasVehicle(event: SelectChangeEvent<string>) {
        setHasVehicle(event.target.value);
    }
}