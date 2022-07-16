import { Button } from "@mui/material";

export interface ConnectWalletButtonProps {
    handleClick: () => void;
}

export function ConnectWalletButton(props: ConnectWalletButtonProps) {
    const { handleClick } = props;
    return (
        <Button color="primary" variant="contained" onClick={handleClick}>
            Connect To Wallet
        </Button>
    )
}