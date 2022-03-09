import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import React from 'react';
import './Modal.scss';

interface ModalProps {
    title: string
    hasAlert?: boolean
    hasDivider?: boolean
    hasEdition?: boolean
    closeIcon?: boolean
    children: JSX.Element
    defaultButtonText?: string
    secondaryButtonText?: string
    open: boolean
    className?: string
    onOpenEdition?: () => void
    onClose: () => void
}

export function Modal({ title, hasAlert, hasDivider, hasEdition, closeIcon, children, defaultButtonText, secondaryButtonText, open, className, onOpenEdition, onClose }: ModalProps) {
    return <Dialog
        open={open}
        keepMounted
        maxWidth="md"
        onClose={onClose}
    >
        <DialogTitle>
            <div className="ModalHeader">
                <div className="ModalTitle">
                    {title}
                    {hasAlert
                        ? <span className="ModalAlertIcon">
                            <IconButton>
                                <WarningIcon color="warning" />
                            </IconButton>
                        </span>
                        : <></>
                    }
                </div>
                <div className="ModalActionIcons">
                    {hasEdition
                        ? <IconButton onClick={onOpenEdition}>
                            <EditIcon />
                        </IconButton>
                        : <></>
                    }
                    {closeIcon
                        ? <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                        : <></>
                    }
                </div>
            </div>
            {hasDivider ? <Divider /> : <></>}
        </DialogTitle>
        <DialogContent className={clsx("ModalContent", className)}>
            {children}
        </DialogContent>
        {defaultButtonText !== undefined && secondaryButtonText !== undefined
            ? <DialogActions className="ModalFooter">
                <Button variant="contained" onClick={onClose}>{defaultButtonText}</Button>
                <Button variant="contained" color="secondary" onClick={onClose}>{secondaryButtonText}</Button>
            </DialogActions>
            : <></>
        }
    </Dialog>
}
