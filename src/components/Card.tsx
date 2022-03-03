import { Checkbox, IconButton, MenuItem, Pagination, Select, SelectChangeEvent, SvgIconTypeMap, TextField, Tooltip } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import FilterListIcon from '@material-ui/icons/FilterList';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React, { ReactNode, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { items } from '../mock/Card.mock';
import { CustomerRegisterForm } from '../modules/customer-register-form/CustomerRegisterForm';
import { Filter } from '../modules/filter/Filter';
import { GenerateTicketForm } from '../modules/generate-ticket-form/GenerateTicketsForm';
import { ActionButton } from './ActionButton';
import './Card.scss';
import { ContentType, CustomPopover } from './Popover';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}

function CardHeader() {
    const [openCustomerRegister, setOpenCustomerRegister] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

    return <div className="CardHeader">
        <div>
            <TextField variant="outlined" size="small" placeholder="Pesquisar por nome, telefone ou e-mail" className="CardHeaderAdjustTextField" />
            <span className="CardHeaderAdjustButtonPosition">
                <ActionButton icon={<FilterListIcon />} text="Filtros" onClick={onOpenFilter} />
            </span>
            <Filter open={openFilter} onClose={onCloseFilter} />
        </div>
        <div>
            <ActionButton color="secondary" icon={<PersonAddIcon />} text="Cliente" onClick={onOpenCustomerRegister} />
        </div>
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

function CardBody() {

    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

    return <div>
        <div className="CardTitle">
            <Checkbox
                color="secondary"
                checked={checked}
                onChange={handleSelectAll}
            />
            <div className="CardTitleItems">
                <h4 className="CardTitleAdjustCustomerName">Nome do cliente</h4>
                <h4 className="CardTitleAdjustLastPurchase">Data última compra</h4>
                <h4 className="CardTitleAdjustLastVehicle">Último veículo</h4>
                <h4 className="CardTitleAdjustFleetLabel">Frota</h4>
                <ActionButton icon={<ListIcon />} text="Gerar evento" onClick={onOpenGenerateTicket} />
            </div>
            <GenerateTicketForm open={open} onClose={onCloseGenerateTicket} />
        </div>
        <div className="CardContent">
            {items.map(item => <div key={item.id} className="CardItem">
                <Checkbox color="secondary" checked={checked} onChange={handleSelect} />
                <div className="CardItemAdjustItems">
                    <Tooltip title={item.customerName} placement="bottom-start">
                        <div className="CardItemAdjustCustomerName">{item.customerName}</div>
                    </Tooltip>
                    <Tooltip title={item.lastPurchase} placement="bottom-start">
                        <div className="CardItemAdjustLastPurchase">{item.lastPurchase}</div>
                    </Tooltip>
                    <Tooltip title={item.lastVehicle} placement="bottom-start">
                        <div className="CardItemAdjustLastVehicle">{item.lastVehicle}</div>
                    </Tooltip>
                    <Tooltip title={item.fleet} placement="bottom-start">
                        <div className="CardItemAdjustFleet">{item.fleet}</div>
                    </Tooltip>
                </div>
                <div className="CardItemAdjustIcons">
                    <ActionIcon
                        type="lgpd"
                        tooltipTitle="Sem restrições"
                        tooltipPlacement="left"
                        icon={<InfoOutlinedIcon
                            color={item.hasRestriction ? "warning" : "info"} />}
                    />
                    <ActionIcon type="tickets" tooltipTitle="" icon={<ListIcon />} />
                    <ActionIcon type="dates" tooltipTitle="" icon={<CalendarTodayIcon />} />
                    <ActionIcon tooltipTitle="" icon={<EditIcon />} />
                    <ActionIcon tooltipTitle="" icon={<FindInPageIcon />} />
                </div>
            </div>
            )}
        </div>
    </div>

    function handleSelect() {
        // setChecked(!checked);
    }

    function handleSelectAll(event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(!checked);
    }

    function onOpenGenerateTicket() {
        setOpen(true);
    }

    function onCloseGenerateTicket() {
        setOpen(false);
    }
}

function CardFooter() {
    const [page, setPage] = useState('10');

    return <div className="CardFooter">
        <div>
            <span className="CardFooterCustomFont">Cadastro por página</span>
            <Select
                value={page}
                size="small"
                onChange={handleChange}
                className="CardFooterSpacingPageSelect"
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
            <span className="CardFooterCustomFont">{page} de {items.length}</span>
        </div>
        <div>
            <Pagination count={+page} shape="rounded" color="secondary" />
        </div>
    </div>

    function handleChange(evt: SelectChangeEvent) {
        setPage(evt.target.value)
    }
}

interface ActionIconProps {
    tooltipTitle: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
    tooltipPlacement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top" | undefined
    icon: IconType | ReactNode;
    type?: ContentType;
}

export function ActionIcon({ tooltipTitle, tooltipPlacement, icon, type }: ActionIconProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? uuid() : undefined;

    return <>
        <CustomPopover id={id} open={open} anchorEl={anchorEl} contentType={type} onClose={handleClose} />
        {type
            ? <Tooltip title={tooltipTitle} placement={tooltipPlacement} arrow>
                <IconButton onClick={handleClick}>
                    {icon}
                </IconButton>
            </Tooltip>
            : <IconButton>{icon}</IconButton>
        }
    </>

    function handleClick(evt: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(evt.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
}

export function Card() {
    return <div className="CardContainer">
        <CardHeader />
        <CardBody />
        <CardFooter />
    </div>
}

