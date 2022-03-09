import BusinessIcon from '@material-ui/icons/Business';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmailIcon from '@material-ui/icons/Email';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MessageIcon from '@material-ui/icons/Message';
import RoomIcon from '@material-ui/icons/Room';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import * as React from 'react';
import { Modal } from '../../components/Modal/Modal';
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
        onClose={onClose}
        onOpenEdition={onOpenEdition}
        hasAlert
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
            <CustomerInfoLastTicket situation="unapproved" />
            <CustomerInfoLastTicket situation="waiting" />
        </div>
    </div>
}

function CustomerInfoDetails() {
    return <div className="CustomerInfoAdjustIcons">
        <div className="CustomerInfoAdjustIconPosition">
            <LocalPhoneIcon htmlColor="#ffffff" />
        </div>
        <div className="CustomerInfoAdjustIconPosition">
            <MessageIcon htmlColor="#ffffff" />
        </div>
        <div className="CustomerInfoAdjustIconPosition">
            <EmailIcon htmlColor="#ffffff" />
        </div>
        <div className="CustomerInfoAdjustIconPosition">
            <WhatsAppIcon htmlColor="#ffffff" />
        </div>
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
                    ? <ThumbUpIcon fontSize="small" />
                    : situation === 'unapproved'
                        ? <ThumbDownIcon fontSize="small" />
                        : <LocalOfferIcon fontSize="small" />
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