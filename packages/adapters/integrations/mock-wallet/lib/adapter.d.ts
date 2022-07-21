import { MoveCallTransaction, TransactionResponse } from "@mysten/sui.js";
import { WalletCapabilities } from "sui-base-wallet-adapter";
export declare class MockWalletAdapter implements WalletCapabilities {
    connecting: boolean;
    connected: boolean;
    getAccounts(): Promise<string[]>;
    executeMoveCall(transaction: MoveCallTransaction): Promise<TransactionResponse>;
    executeSerializedMoveCall(transactionBytes: Uint8Array): Promise<TransactionResponse>;
    name: string;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    constructor(name: string);
}
