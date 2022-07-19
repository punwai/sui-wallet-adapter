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

function App() {
  const supportedWallets: Wallet[] = [
    {
      adapter: new SuiWalletAdapter()
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <WalletProvider supportedWallets={supportedWallets}>
            <Button variant="contained">Send Transaction</Button><br/>
            <WalletWrapper/>
        </WalletProvider>
      </header>
    </div>
  );
}

export default App;