import { MoveCallTransaction, SuiAddress, TransactionResponse } from '@mysten/sui.js';
import { createContext, useContext } from 'react';
import { WalletAdapter } from 'sui-base-wallet-adapter';

export interface Wallet {
    adapter: WalletAdapter;
}

export interface WalletContextState {
    // Supported Wallets
    supportedWallets: Wallet[];
    // Wallet that we are currently connected to
    wallet: Wallet | null;

    connecting: boolean;
    connected: boolean;
    // disconnecting: boolean;

    select(walletName: string): void;
    connect(): Promise<void>;
    disconnect(): Promise<void>;

    getAccounts: () => Promise<SuiAddress[]>; 
    executeMoveCall: (transaction: MoveCallTransaction) => Promise<TransactionResponse>;
    executeSerializedMoveCall: (transactionBytes: Uint8Array) => Promise<TransactionResponse>;
}

const EMPTY_ARRAY: ReadonlyArray<never> = [];

const DEFAULT_CONTEXT = {
    supportedWallets: [],
    wallet: null,
    connecting: false,
    connected: false,
    select(_name: string) {
        console.error(constructMissingProviderErrorMessage('get', 'select'));
    },
    connect() {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'connect')));
    },
    disconnect() {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'disconnect')));
    },
    getAccounts() {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'getAccounts')));
    },
    executeMoveCall(transaction: MoveCallTransaction): Promise<TransactionResponse> {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'executeMoveCall')));
    },
    executeSerializedMoveCall(transactionBytes: Uint8Array): Promise<TransactionResponse> {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'executeSerializedMoveCall')));
    }
} as WalletContextState;


// Reword these, they are from Solana's repo
Object.defineProperty(DEFAULT_CONTEXT, 'wallets', {
    get() {
        console.error(constructMissingProviderErrorMessage('read', 'wallets'));
        return EMPTY_ARRAY;
    },
});
Object.defineProperty(DEFAULT_CONTEXT, 'wallet', {
    get() {
        console.error(constructMissingProviderErrorMessage('read', 'wallet'));
        return null;
    },
});
Object.defineProperty(DEFAULT_CONTEXT, 'publicKey', {
    get() {
        console.error(constructMissingProviderErrorMessage('read', 'publicKey'));
        return null;
    },
});

function constructMissingProviderErrorMessage(action: string, valueName: string) {
    return (
        'You have tried to ' +
        ` ${action} "${valueName}"` +
        ' on a WalletContext without providing one.' +
        ' Make sure to render a WalletProvider' +
        ' as an ancestor of the component that uses ' +
        'WalletContext'
    );
}

export const WalletContext = createContext<WalletContextState>(DEFAULT_CONTEXT as WalletContextState);

export function useWallet(): WalletContextState {
    return useContext(WalletContext);
}
