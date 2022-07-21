import { FC, ReactNode } from "react";
import { WalletCapabilities } from "sui-base-wallet-adapter";
import { Wallet } from './useWallet';
export interface WalletAdapter {
    adapter: WalletCapabilities;
}
export interface WalletProviderProps {
    children: ReactNode;
    supportedWallets: Wallet[];
}
export declare const WalletProvider: FC<WalletProviderProps>;
