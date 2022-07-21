/*
 * Wraps around all UI components for the Wallet Adapter.
 * Import this component where you desire your "Connect Wallet" button to be.
 */

import { Button, createTheme, ThemeProvider } from "@mui/material"
// // import { ConnectWalletModal } from "./ConnectWalletModal"
// import { ManageWalletModal } from "./ManageWalletModal"


const theme = createTheme({
    typography: {
        "fontFamily": `"IBM Plex Sans", sans-serif`,
    }
})

export function WalletWrapper({}) {
    return(
        <>
            <Button></Button>
            {/* <ThemeProvider theme={theme}> */}
                {/* <ConnectWalletModal/> */}
                {/* <ManageWalletModal/> */}
            {/* </ThemeProvider> */}
        </>
    )
}