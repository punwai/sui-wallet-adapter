// /*
//  * This provider provides an API for the 
//  * 
//  * 
//  */

import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import type { SuiAddress, MoveCallTransaction, TransactionResponse } from '@mysten/sui.js';
import { WalletCapabilities } from "../adapters/interface/objects";
import { Wallet, WalletContext } from './useWallet';
import { Button } from "@mui/material";

export interface WalletAdapter {
    adapter: WalletCapabilities;
}

export interface WalletProviderProps {
    children: ReactNode;
    // Pass this through props to add list of supported wallets
    supportedWallets: Wallet[]
}

export const WalletProvider: FC<WalletProviderProps> = ({
    children,
    supportedWallets
}) => {
    
    // Wallet that user chose
    const [wallet, setWallet]:
        [WalletAdapter | null, (wallet: WalletAdapter | null) => void]
        = useState<WalletAdapter | null>(null);
    const [connected, setConnected]:
        [boolean, (connected: boolean) => void] = useState(false)
    const [connecting, setConnecting]:
        [boolean, (connected: boolean) => void] = useState(false)

    const connect = useCallback(
        async () => {
            if (wallet == null) {
                return;
            }
            try {
                setConnecting(true);
                await wallet.adapter.connect()
                setConnected(true)
            } catch (e) {
                setConnected(false) 
            }
            setConnecting(false);
        }, [wallet]);

    const disconnect = async () => {
        setConnected(false);
        setWallet(null);
    }

    const choose = (name: string) => {
        let newWallet = supportedWallets.find(wallet => wallet.adapter.name === name);
        if (newWallet) {
            setWallet(newWallet);
        }
        connect();
    }

    const getAccounts = async (): Promise<SuiAddress[]> => {
        if (wallet == null) throw Error('Wallet Not Connected');
        return await wallet.adapter.getAccounts();
    }

    const executeMoveCall = async (transaction: MoveCallTransaction): Promise<TransactionResponse> => {
        if (wallet == null) throw Error('Wallet Not Connected');
        return await wallet.adapter.executeMoveCall(transaction);
    }

    const executeSerializedMoveCall = async (transactionBytes: Uint8Array): Promise<TransactionResponse> => {
        if (wallet == null) throw Error('Wallet Not Connected');
        return await wallet.adapter.executeSerializedMoveCall(transactionBytes);
    }

    // // Whenever a user selects a new wallet, attempt to connect
    useEffect(() => {
        if (
            wallet != null && 
            connecting !== true &&
            connected !== true
        ) {
            connect();
        }
    }, [connect, wallet, connecting, connected])

    // Whenever the user selectes a new wallet

    return (
        <WalletContext.Provider value={{
                supportedWallets,
                wallet,
                connecting: connecting,
                connected: connected,

                select: choose, 
                connect,
                disconnect,

                getAccounts,
                executeMoveCall,
                executeSerializedMoveCall
        }}>
            {children}
        </WalletContext.Provider>
    );
};
