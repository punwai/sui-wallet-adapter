import React from 'react';
import logo from './logo.svg';
import './App.css';
import { root } from '.';
import { ConnectWalletButton } from './ui/ConnectWalletButton';
import { WalletSelectDialog } from './ui/WalletSelectionDialog';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = (value: string) => {
    setOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ConnectWalletButton handleClick={handleClickOpen} />
        <WalletSelectDialog open={open} onClose={handleClose}/>
      </header>
    </div>
  );
}

export default App;