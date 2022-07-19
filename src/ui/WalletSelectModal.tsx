import { Box, Dialog, DialogTitle, List, ListItemButton, ListItemText, Modal, Typography } from "@mui/material";
import { useWallet } from "../providers";

export interface WalletSelectModalProps {
    open: boolean;
    onClose: (value: string) => void;
}

export function WalletSelectModal(props: WalletSelectModalProps) {
    const { onClose, open } = props;

    const { supportedWallets, wallet, select, connect } = useWallet();

    const handleClose = () => {
        onClose("1");
    }

    const handleConnect = (walletName: string) => {
        console.log(walletName);
        select(walletName);
        connect();
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
    };

    return (
        <>
        </>
    )
}