import { Button } from "@mui/material";
import React from "react";
import { useWallet } from "sui-wallet-adapter-react";

export function TestButton() {
    
    let { connected, getAccounts, executeMoveCall } = useWallet();

    const handleClick = async () => {
        getAccounts().then((accounts) => {
            console.log("Getting Accounts", accounts)
        })
        await executeMoveCall({
            packageObjectId: '0x2',
            module: 'devnet_nft',
            function: 'mint',
            typeArguments: [],
            arguments: ["name", "capy", "https://cdn.britannica.com/94/194294-138-B2CF7780/overview-capybara.jpg?w=800&h=450&c=crop"],
            gasBudget: 10000,
        });
    }

    return (
        <Button variant="contained" onClick={handleClick} disabled={!connected}>Send Transaction</Button>
    )
}
