import { Dialog, DialogTitle, List, ListItemButton, ListItemText } from "@mui/material";

export interface WalletSelectionProps {
    open: boolean;
    onClose: (value: string) => void;
}

export function WalletSelectDialog(props: WalletSelectionProps) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose("1");
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Select Wallet</DialogTitle>
            <List>
                <ListItemButton onClick={handleClose}>
                    <ListItemText primary="Native Wallet" />
                </ListItemButton>
                <ListItemButton onClick={handleClose}>
                    <ListItemText primary="Slope Wallet" />
                </ListItemButton>
                <ListItemButton onClick={handleClose}>
                    <ListItemText primary="Phantoms Wallet" />
                </ListItemButton>
            </List>
        </Dialog>
    )
}