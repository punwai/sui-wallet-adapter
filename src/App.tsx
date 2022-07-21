import React from 'react';
import './App.css';
import { root } from '.';
import { Wallet, WalletProvider } from 'sui-wallet-adapter-react';
import { SuiWalletAdapter, MockWalletAdapter} from '@sui-wallet-adapter/all-wallets';
import { WalletWrapper } from 'sui-wallet-adapter-ui';
import { Button } from '@mui/material';
import { TestButton } from './TestButton';

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
        <Button></Button>
        <TestButton/>
        <WalletProvider supportedWallets={supportedWallets}>
          Doug
          <WalletWrapper/>
        </WalletProvider>
        {/* <WalletProvider supportedWallets={supportedWallets}>
             <br/>
            <WalletWrapper/>
        </WalletProvider> */}
      </header>
    </div>
  );
}

export default App;