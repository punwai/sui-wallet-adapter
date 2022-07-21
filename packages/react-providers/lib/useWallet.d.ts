/// <reference types="react" />
import { MoveCallTransaction, SuiAddress, TransactionResponse } from '@mysten/sui.js';
import { WalletAdapter } from 'sui-base-wallet-adapter';
export interface Wallet {
    adapter: WalletAdapter;
}
export interface WalletContextState {
    supportedWallets: Wallet[];
    wallet: Wallet | null;
    connecting: boolean;
    connected: boolean;
    select(walletName: string): void;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getAccounts: () => Promise<SuiAddress[]>;
    executeMoveCall: (transaction: MoveCallTransaction) => Promise<TransactionResponse>;
    executeSerializedMoveCall: (transactionBytes: Uint8Array) => Promise<TransactionResponse>;
}
export declare const WalletContext: import("react").Context<WalletContextState>;
export declare function useWallet(): WalletContextState;
