import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import './Modal.scss';

interface ModalProps {
    title: string
    closeIcon?: boolean
    content: JSX.Element
    defaultButtonText: string
    secondaryButtonText: string
    open: boolean
    onClose: () => void
}

export function Modal({ title, closeIcon, content, defaultButtonText, secondaryButtonText, open, onClose }: ModalProps) {
    return <Dialog
        open={open}
        keepMounted
        maxWidth="md"
        onClose={onClose}
    >
        <DialogTitle>
            <span className="ModalTitle">{title}</span>
            {closeIcon
                ? <IconButton onClick={onClose} className="ModalCloseButton">
                    <CloseIcon />
                </IconButton>
                : <></>
            }
            <Divider />
        </DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions className="ModalFooter">
            <Button variant="contained" onClick={onClose}>{defaultButtonText}</Button>
            <Button variant="contained" color="secondary" onClick={onClose}>{secondaryButtonText}</Button>
        </DialogActions>
    </Dialog>
}
