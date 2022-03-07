import { Popover } from '@material-ui/core';
import React from 'react';
import { v4 as uuid } from 'uuid';
import './Popover.scss';

export type ContentType = "lgpd" | "tickets" | "dates" | undefined;

interface CustomPopoverProps {
    content: JSX.Element
}

export function CustomPopover({ content }: CustomPopoverProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    return <div>
        <div className="PopoverContainer" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            {content}
        </div>
        <Popover
            id={uuid()}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            className="Popover"
        >
            <div className="PopoverFrame">
                <p className="PopoverTitle">Histórico de eventos</p>
                <p className="PopoverContent">
                    <b>103327</b> - Oportunidade / Novos - Em andamento
                </p>
                <p className="PopoverContent">
                    <b>103327</b> - Oportunidade / Novos - Em andamento
                </p>
                <p className="PopoverContent">
                    <b>103327</b> - Oportunidade / Novos - Em andamento
                </p>
            </div>
        </Popover>
    </div>

    function handlePopoverOpen(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handlePopoverClose() {
        setAnchorEl(null);
    }
}
