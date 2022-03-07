import { Checkbox, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import FilterListIcon from '@material-ui/icons/FilterList';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/Warning';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { CustomPopover } from '../../components/Popover/Popover';
import { items } from '../../mock/CustomerListing.mock';
import { CustomerInfo } from '../customer-info/CustomerInfo';
import { CustomerRegisterForm } from '../customer-register-form/CustomerRegisterForm';
import { GenerateTicketForm } from '../generate-ticket-form/GenerateTicketsForm';
import './CustomerListing.scss';

interface Data {
    id: number
    customer: string
    lastPurchase: string
    lastVehicle: string
    fleet: number
    hasRestriction: boolean
}

const rows = items;

interface HeadCell {
    disablePadding: boolean
    id: keyof Data
    label: string
    numeric?: boolean
}

const headCells: readonly HeadCell[] = [
    {
        id: 'customer',
        disablePadding: true,
        label: 'Cliente',
        numeric: false
    },
    {
        id: 'lastPurchase',
        disablePadding: false,
        label: 'Última compra',
        numeric: true
    },
    {
        id: 'lastVehicle',
        disablePadding: false,
        label: 'Último veículo',
        numeric: true
    },
    {
        id: 'fleet',
        disablePadding: false,
        label: 'Frota',
        numeric: true
    }
];

interface CustomerListingTableProps {
    numSelected: number
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
    rowCount: number
}

function CustomerListingTableHead(props: CustomerListingTableProps) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    const [openGenerateTicketForm, setOpenGenerateTicketForm] = React.useState(false);

    return <TableHead className="CustomerListingTableHead">
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                    color="secondary"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                />
            </TableCell>
            {headCells.map(headCell => (
                <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                >
                    {headCell.label}
                </TableCell>
            ))}
            <TableCell align="right" colSpan={5}>
                <ActionButton
                    icon={<FilterListIcon />}
                    text="Gerar Evento"
                    onClick={onOpenGenerateTicket}
                    disabled={numSelected === 0}
                />
            </TableCell>
        </TableRow>
        <GenerateTicketForm open={openGenerateTicketForm} onClose={onCloseGenerateTicket} />
    </TableHead>

    function onOpenGenerateTicket() {
        setOpenGenerateTicketForm(true);
    }

    function onCloseGenerateTicket() {
        setOpenGenerateTicketForm(false);
    }
}

export function CustomerListing() {
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openCustomerInfo, setOpenCustomerInfo] = React.useState(false);
    const [openCustomerRegisterForm, setOpenCustomerRegisterForm] = React.useState(false);

    const isSelected = (id: number) => selected.indexOf(id) !== -1;
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return <div className="CustomerListing">
        <TableContainer className="CustomerListingTableContainer">
            <Table stickyHeader className="CustomerListingTable">
                <CustomerListingTableHead numSelected={selected.length} onSelectAllClick={handleSelectAllClick} rowCount={rows.length} />
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `${uuid()}-${index}`;

                        return <TableRow
                            hover
                            onClick={event => handleClick(event, row.id)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="secondary"
                                    checked={isItemSelected}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                {row.customer}
                            </TableCell>
                            <TableCell align="right">
                                <span className="CustomerListingAdjustLastPurchaseTableCellPosition">
                                    {row.lastPurchase}
                                </span>
                            </TableCell>
                            <TableCell align="right">
                                <span className="CustomerListingAdjustLastVehicleTableCellPosition">
                                    {row.lastVehicle}
                                </span>
                            </TableCell>
                            <TableCell align="right">
                                <span className="CustomerListingAdjustfleetTableCellPosition">
                                    {row.fleet}
                                </span>
                            </TableCell>
                            <TableCell align="right">
                                {row.hasRestriction
                                    ? <Tooltip title="Com restrições">
                                        <IconButton>
                                            <WarningIcon color="warning" />
                                        </IconButton>
                                    </Tooltip>
                                    : <Tooltip title="Sem restrições">
                                        <IconButton>
                                            <InfoOutlinedIcon color="info" />
                                        </IconButton>
                                    </Tooltip>
                                }
                                <IconButton>
                                    <CustomPopover content={<FormatListBulletedIcon />} />
                                </IconButton>
                                <IconButton>
                                    <CustomPopover content={<CalendarTodayIcon />} />
                                </IconButton>
                                <IconButton onClick={onOpenCustomerRegisterForm}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={onOpenCustomerInfo}>
                                    <FindInPageIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Cadastros por página"
        />
        <CustomerInfo open={openCustomerInfo} onClose={onCloseCustomerInfo} onOpenEdition={onOpenCustomerRegisterForm} />
        <CustomerRegisterForm open={openCustomerRegisterForm} onClose={onCloseCustomerRegisterForm} />
    </div>

    function handleSelectAllClick(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            const newSelecteds = rows.map(customer => customer.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    }

    function handleClick(event: React.MouseEvent<unknown>, id: number) {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    }

    function handleChangePage(event: unknown, newPage: number) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    function onOpenCustomerInfo() {
        setOpenCustomerInfo(true);
    }

    function onCloseCustomerInfo() {
        setOpenCustomerInfo(false);
    }

    function onOpenCustomerRegisterForm() {
        setOpenCustomerRegisterForm(true);
    }

    function onCloseCustomerRegisterForm() {
        setOpenCustomerRegisterForm(false);
    }
}