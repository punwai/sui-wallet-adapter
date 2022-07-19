import React from 'react';
import logo from './logo.svg';
import './App.css';
import { root } from '.';
import { ConnectWalletModal } from './ui/ConnectWalletModal';
import { Wallet, WalletProvider } from './providers';
import { SuiWalletAdapter } from './adapters/adapters/sui-wallet/adapter';
import { ManageWalletModal } from './ui/ManageWalletModal';
import { WalletWrapper } from './ui/WalletWrapper';
import { Button } from '@mui/material';
import { MockWalletAdapter } from './adapters/adapters/mock-wallet/adapter';
import { TestButton } from './example/TestButton';

function App() {
  const supportedWallets: Wallet[] = [
    {
      adapter: new SuiWalletAdapter()
    },
    {
      adapter: new MockWalletAdapter("Slope Wallet")
    },
    {
      adapter: new MockWalletAdapter("Phantom Wallet")
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <WalletProvider supportedWallets={supportedWallets}>
            <TestButton/>
            <br/>
            <WalletWrapper/>
        </WalletProvider>
      </header>
    </div>
  );
}

export default App;