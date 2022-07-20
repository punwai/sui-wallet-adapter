import { MoveCallTransaction, SuiAddress, TransactionResponse } from "@mysten/sui.js";
import { WalletCapabilities } from "sui-base-wallet-adapter";

const ALL_PERMISSION_TYPES = [
    'viewAccount',
    'suggestTransactions',
];
type AllPermissionsType = typeof ALL_PERMISSION_TYPES;
type PermissionType = AllPermissionsType[number];

interface SuiWallet {
    hasPermissions(permissions: readonly PermissionType[]): Promise<boolean>;
    requestPermissions(): Promise<boolean>;
    getAccounts(): Promise<SuiAddress[]>;
    executeMoveCall: (transaction: MoveCallTransaction) => Promise<TransactionResponse>;
    executeSerializedMoveCall: (transactionBytes: Uint8Array) => Promise<TransactionResponse>;
}
interface SuiWalletWindow {
    suiWallet: SuiWallet
}

declare const window: SuiWalletWindow;

// Stored as state somewhere (Probably in a place with generics )
export class MockWalletAdapter implements WalletCapabilities{
    connecting: boolean;
    connected: boolean;

    getAccounts(): Promise<string[]> {
        return window.suiWallet.getAccounts();
    }
    executeMoveCall(transaction: MoveCallTransaction): Promise<TransactionResponse> {
        return window.suiWallet.executeMoveCall(transaction);
    }
    executeSerializedMoveCall(transactionBytes: Uint8Array): Promise<TransactionResponse> {
        return window.suiWallet.executeSerializedMoveCall(transactionBytes);
    }

    name: string; 

    async connect(): Promise<void> {
        this.connecting = true;
        if (window.suiWallet) {
            const wallet = window.suiWallet;
            try {
                let given = await wallet.requestPermissions();
                const newLocal: readonly PermissionType[] = ['viewAccount']
                let perms = await wallet.hasPermissions(newLocal);
                console.log(perms);
                console.log(given);
                this.connected = true;
            } catch (err) {
                console.error(err);
            } finally {
                this.connecting = false;
            }
        }
    }

    // Come back to this later
    async disconnect(): Promise<void> {
        if (this.connected == true) {
            this.connected = false;
        }
        console.log("disconnected");
    }

    constructor(name: string) {
        this.connected = false;
        this.connecting = false;
        this.name = name;
    }
}