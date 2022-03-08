import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { vehicleFilterItems } from '../../../mock/Filter.mock';
import { TextsProvider } from '../../../translation/filter/vehicle-filter';
import './VehicleFilter.scss';

const texts = TextsProvider.get()

export function VehicleFilter() {
    const [hasVehicle, setHasVehicle] = React.useState('');

    return <div className="VehicleFilter">
        <div className="VehicleFilterAdjustFields">
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.VEHICLE_BRAND_PLACEHOLDER} className="VehicleFilterBrand" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.VEHICLE_MODEL_PLACEHOLDER} className="VehicleFilterModel" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.VEHICLE_VERSION_PLACEHOLDER} className="VehicleFilterVersion" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.VEHICLE_MODEL_YEAR_PLACEHOLDER} className="VehicleFilterModelYear" />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.VEHICLE_PLATE_PLACEHOLDER} className="VehicleFilterPlate" />
            </div>
            <div className="VehicleFilterAdjustField">
                {vehicleFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.HAS_VEHICLE_LABEL}
                        value={hasVehicle}
                        items={item.vehicle.hasVehicle}
                        onChange={onChangeHasVehicle}
                        className="VehicleFilterHasVehicle"
                    />
                })}
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField variant="outlined" size="small" placeholder={texts.VEHICLE_CHASSIS_PLACEHOLDER} className="VehicleFilterChassis" />
            </div>
            <div className="VehicleFilterAdjustField">
                <SimpleDatePicker label={texts.SALE_DATE_LABEL} className="VehicleFilterSaleDate" />
            </div>
            <div className="VehicleFilterAdjustField">
                <SimpleDatePicker label={texts.INVOICE_DATE_LABEL} className="VehicleFilterInvoiceDate" />
            </div>
        </div>
    </div>

    function onChangeHasVehicle(event: SelectChangeEvent<string>) {
        setHasVehicle(event.target.value);
    }
}