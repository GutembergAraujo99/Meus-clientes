import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import React from 'react';
import './Modal.scss';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any>; },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
});

interface ModalProps {
    title: string
    content: JSX.Element
    defaultButtonText: string
    secondaryButtonText: string
    open: boolean
    handleClose: () => void
}

export function Modal({ title, content, defaultButtonText, secondaryButtonText, open, handleClose }: ModalProps) {
    return <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        onClose={handleClose}
    >
        <DialogTitle>
            <span className="ModalTitle">{title}</span>
            <Divider />
        </DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions className="ModalFooter">
            <Button variant="contained" onClick={handleClose}>{defaultButtonText}</Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>{secondaryButtonText}</Button>
        </DialogActions>
    </Dialog>
}
