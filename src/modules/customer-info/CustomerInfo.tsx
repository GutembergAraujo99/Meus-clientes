import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmailIcon from '@material-ui/icons/Email';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import RoomIcon from '@material-ui/icons/Room';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WarningIcon from '@material-ui/icons/Warning';
import * as React from 'react';
import { Modal } from '../../components/Modal/Modal';
import { items } from '../../mock/CustomerInfo.mock';
import { TextsProvider } from '../../translation/customer-info';
import './CustomerInfo.scss';

const texts = TextsProvider.get()

interface CustomerInfoProps {
    open: boolean
    onClose: () => void
    onOpenEdition: () => void
}

export function CustomerInfo({ open, onClose, onOpenEdition }: CustomerInfoProps) {
    return <Modal
        title="Alberto Roberto"
        open={open}
        onClick={onClose}
        onClose={onClose}
        onOpenEdition={onOpenEdition}
        hasEdition
    >
        <CustomerInfoContent />
    </Modal>
}

function CustomerInfoContent() {
    return <div>
        <CustomerInfoDetails />
        <div className="CustomerInfoSpacingBetweenInfo">
            <CustomerInfoContact />
            <CustomerInfoAddress />
            <CustomerInfoVehicle />
            <CustomerInfoCompany />
        </div>
        <div>
            <p className="CustomerInfoContentTitle">{texts.LAST_TICKETS_SECTION_TITLE}</p>
            <CustomerInfoLastTicket situation="approved" />
            <CustomerInfoLastTicket situation="waiting" />
            <CustomerInfoLastTicket situation="unapproved" />
        </div>
    </div>
}

function CustomerInfoDetails() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    }

    return <div className="CustomerInfoDetails">
        <Accordion expanded={expanded === 'panelLgpd'} elevation={0} disableGutters onChange={handleChange('panelLgpd')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="CustomerInfoDetailsAccordionSummary">
                <div className="CustomerInfoDetailsAccordionSummaryTitle">
                    <b>{texts.LGPD_TITLE}</b>
                    <div className="CustomerInfoDetailsAccordionSummaryIconPosition">
                        <WarningIcon color="warning" />
                    </div>
                </div>
                <div className="CustomerInfoDetailsAccordionSummaryDividerPosition">
                    <Divider />
                </div>
            </AccordionSummary>
            <AccordionDetails className="CustomerInfoDetailsAccordionDetails">
                <div>
                    <div className="CustomerInfoDetailsAccordionDetailsSpacingBetweenElements">
                        {texts.CONTACT_PREFERENCES_HEADER_TITLE}
                    </div>
                    <div className="CustomerInfoDetailsAccordionDetailsAdjustFont">
                        {texts.CONTACT_PREFERENCES_CONTENT_DESCRIPTION}
                    </div>
                </div>
                <div>
                    <p>{texts.RESTRICTIONS_HEADER_TITLE}</p>
                    <div className="CustomerInfoDetailsAccordionDetailsRestrictionsContainer">
                        <ul className="CustomerInfoDetailsAccordionDetailsAdjustFont">
                            {items.map(item => {
                                return item.restrictions.map(value => {
                                    return <li key={value.id} className="CustomerInfoDetailsAccordionDetailsSpacingBetweenElements">
                                        {value.name}
                                    </li>
                                })
                            })}
                        </ul>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
}

function CustomerInfoContact() {
    return <div className="CustomerInfoContact">
        <p className="CustomerInfoContactTitle">{texts.CONTACTS_SECTION_TITLE}</p>
        <div className="CustomerInfoContactAdjustInfo">
            <LocalPhoneIcon color="action" className="CustomerInfoContactAdjustIcon" />
            <span className="CustomerInfoContactLabel">(51) 99999-9999</span>
        </div>
        <div className="CustomerInfoContactAdjustInfo">
            <LocalPhoneIcon color="action" className="CustomerInfoContactAdjustIcon" />
            <span className="CustomerInfoContactLabel">(51) 3632-9999</span>
        </div>
        <div className="CustomerInfoContactAdjustInfo">
            <EmailIcon color="action" className="CustomerInfoContactAdjustIcon" />
            <span className="CustomerInfoContactLabel">bruno.moreira@syonet.com</span>
        </div>
    </div>
}

function CustomerInfoAddress() {
    return <div className="CustomerInfoAddress">
        <p className="CustomerInfoAddressTitle">{texts.ADDRESS_SECTION_TITLE}</p>
        <div className="CustomerInfoAddressAdjustInfo">
            <RoomIcon color="action" className="CustomerInfoAddressAdjustIcon" />
            <span className="CustomerInfoAddressLabel">
                Rua Buarque de Macedo, 93<br />
                Centro - Montenegro<br />
                CEP: 925120-300
            </span>
        </div>
    </div>
}

function CustomerInfoVehicle() {
    return <div className="CustomerInfoVehicle">
        <p className="CustomerInfoVehicleTitle">{texts.VEHICLES_SECTION_TITLE} (2)</p>
        <div className="CustomerInfoVehicleAdjustInfo">
            <DirectionsCarIcon color="action" className="CustomerInfoVehicleAdjustIcon" />
            <span className="CustomerInfoVehicleLabel">Polo / Highline 200 TSI - 2019/2019</span>
        </div>
        <div className="CustomerInfoVehicleAdjustInfo">
            <DirectionsCarIcon color="action" className="CustomerInfoVehicleAdjustIcon" />
            <span className="CustomerInfoVehicleLabel">Gol / Confort - 2016/2017</span>
        </div>
    </div>
}

function CustomerInfoCompany() {
    return <div className="CustomerInfoCompany">
        <p className="CustomerInfoCompanyTitle">{texts.CUSTOMER_COMPANIES_SECTION_TITLE}</p>
        <div className="CustomerInfoCompanyAdjustInfo">
            <BusinessIcon color="action" className="CustomerInfoCompanyAdjustIcon" />
            <span className="CustomerInfoCompanyLabel">Hyundai de NH</span>
        </div>
    </div>
}


interface CustomerInfoLastTicketProps {
    situation: "approved" | "unapproved" | "waiting"
}

function CustomerInfoLastTicket({ situation }: CustomerInfoLastTicketProps) {

    const inlineLastTicketStyle = {
        backgroundColor: situation === 'approved'
            ? '#2D9600'
            : situation === 'unapproved'
                ? '#DB1111'
                : '#0066CC'
    }

    return <div className="CustomerInfoLastTicket">
        <div className="CustomerInfoLastTicketAdjustItems">
            <div className="CustomerInfoLastTicketAdjustIcon" style={inlineLastTicketStyle}>
                {situation === 'approved'
                    ? <ThumbUpIcon fontSize="inherit" />
                    : situation === 'unapproved'
                        ? <ThumbDownIcon fontSize="inherit" />
                        : <LocalOfferIcon fontSize="inherit" />
                }
            </div>
            <div className="CustomerInfoLastTicketAdjustItems">
                <div className="CustomerInfoLastTicketAdjustDescription">
                    <span className="CustomerInfoLastTicketAdjustDescriptionNumber">103237</span>
                    <span className="CustomerInfoLastTicketAdjustDescriptionName">Oportunidade / Novos</span>
                </div>
                <div className="CustomerInfoLastTicketAdjustLastTicketDateContainer">
                    <LocalPhoneIcon />
                    <span className="CustomerInfoLastTicketAdjustLastTicketDateContent">30/01/2021</span>
                </div>
            </div>
        </div>
    </div>
}