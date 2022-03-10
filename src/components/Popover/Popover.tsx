import { Popover, PopoverOrigin } from '@material-ui/core';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { contents } from '../../mock/Popover.mock';
import './Popover.scss';

export type ContentType = "lgpd" | "tickets" | "dates" | undefined;

const anchorOrigin: PopoverOrigin = { vertical: 'top', horizontal: 'left' }
const transformOrigin: PopoverOrigin = { vertical: 'top', horizontal: 'right' }

interface CustomPopoverProps {
    type: ContentType
    icon: JSX.Element
    hasRestrictions?: boolean
}

export function CustomPopover({ type, icon, hasRestrictions }: CustomPopoverProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    let title = '';
    if (type === 'lgpd') {
        title = 'LGPD';
    } else if (type === 'tickets') {
        title = 'Histórico de eventos';
    } else if (type === 'dates') {
        title = 'Datas';
    }

    return <div>
        <div className="PopoverContainer" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            {icon}
        </div>
        <Popover
            id={uuid()}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            onClose={handlePopoverClose}
            disableRestoreFocus
            className="Popover"
        >
            <div className="PopoverFrame">
                <div className="PopoverTitle">{title}</div>
                {contents.map((content, index) => {
                    return <div key={index}>
                        {type === 'tickets'
                            ? content.tickets.map((item, index) => {
                                return <PopoverTicket key={index} number={item.number} description={item.description} />
                            })
                            : type === 'dates'
                                ? content.dates.map((item, index) => {
                                    return <PopoverDate key={index} date={item.date} description={item.description} />
                                })
                                : type === 'lgpd' && hasRestrictions
                                    ? content.lgpd.map((item, index) => {
                                        return <PopoverLgpd key={index} description={item.description} />
                                    })
                                    : <PopoverLgpd description={'Sem restrições'} />
                        }
                    </div>
                })}
            </div>
        </Popover >
    </div >

    function handlePopoverOpen(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handlePopoverClose() {
        setAnchorEl(null);
    }
}

interface PopoverTicketProps {
    number: number
    description: string
}

function PopoverTicket({ number, description }: PopoverTicketProps) {
    return <div>
        <p className="PopoverContent">
            <b>{number}</b> - {description}
        </p>
    </div>
}

interface PopoverDateProps {
    date: string
    description: string
}

function PopoverDate({ date, description }: PopoverDateProps) {
    return <div className="PopoverContent">
        <div className="PopoverSubContent">
            <span className="PopoverSubContentTitle">{description}</span>
            <span>{date}</span>
        </div>
    </div>
}

interface PopoverLgpdProps {
    description: string
}

function PopoverLgpd({ description }: PopoverLgpdProps) {
    return <div className="PopoverContent">
        <ul className="PopoverItem">
            <li>{description}</li>
        </ul>
    </div>
}