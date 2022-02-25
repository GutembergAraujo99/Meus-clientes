import { Button, ButtonProps, styled, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { ReactNode } from 'react';
import './ActionButton.scss';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}

const CustomButton = styled(Button)<ButtonProps>(() => ({
    minWidth: 32,
    minHeight: 40
}));

interface ActionButtonProps {
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    text?: string;
    icon?: IconType | ReactNode;
    disabled?: boolean;
    variant?: "text" | "outlined" | "contained" | undefined;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function ActionButton({ color, text, icon, disabled, variant, onClick }: ActionButtonProps) {
    return <CustomButton variant={variant || "contained"} color={color} onClick={onClick} disabled={disabled}>
        {icon}
        <span className={text && icon ? 'AdjustIconAndTextPosition' : undefined}>{text}</span>
    </CustomButton>
}