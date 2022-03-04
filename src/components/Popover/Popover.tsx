import { Popover } from '@material-ui/core';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { contents } from '../../mock/Popover.mock';
import './Popover.scss';

export type ContentType = "lgpd" | "tickets" | "dates" | undefined;

interface PopoverProps {
    id?: string;
    open: boolean;
    anchorEl?: Element | ((element: Element) => Element) | null | undefined;
    contentType: ContentType;
    onClose: () => void;
}

export function CustomPopover({ id, open, anchorEl, contentType, onClose }: PopoverProps) {
    return <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        elevation={3}
    >
        <PopoverContent type={contentType} />
    </Popover>
}

interface PopoverContentProps {
    type: ContentType;
}

function PopoverContent({ type }: PopoverContentProps) {
    return <div className="PopoverContainer">
        {contents.map(content => <div key={content.type}>
            {content.type === type
                ? <div>
                    <h4 className="PopoverTitle">{content.title}</h4>
                    <hr className="PopoverDivider" />
                    {content.descriptions.map(description => {
                        return <div key={uuid()} className="PopoverContent">{description}</div>
                    })}
                </div>
                : <></>
            }
        </div>
        )}
    </div>
}