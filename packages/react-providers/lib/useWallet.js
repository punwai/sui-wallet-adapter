import { createContext, useContext } from 'react';
var EMPTY_ARRAY = [];
var DEFAULT_CONTEXT = {
    supportedWallets: [],
    wallet: null,
    connecting: false,
    connected: false,
    select: function (_name) {
        console.error(constructMissingProviderErrorMessage('get', 'select'));
    },
    connect: function () {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'connect')));
    },
    disconnect: function () {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'disconnect')));
    },
    getAccounts: function () {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'getAccounts')));
    },
    executeMoveCall: function (transaction) {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'executeMoveCall')));
    },
    executeSerializedMoveCall: function (transactionBytes) {
        return Promise.reject(console.error(constructMissingProviderErrorMessage('get', 'executeSerializedMoveCall')));
    }
};
// Reword these, they are from Solana's repo
Object.defineProperty(DEFAULT_CONTEXT, 'wallets', {
    get: function () {
        console.error(constructMissingProviderErrorMessage('read', 'wallets'));
        return EMPTY_ARRAY;
    },
});
Object.defineProperty(DEFAULT_CONTEXT, 'wallet', {
    get: function () {
        console.error(constructMissingProviderErrorMessage('read', 'wallet'));
        return null;
    },
});
Object.defineProperty(DEFAULT_CONTEXT, 'publicKey', {
    get: function () {
        console.error(constructMissingProviderErrorMessage('read', 'publicKey'));
        return null;
    },
});
function constructMissingProviderErrorMessage(action, valueName) {
    return ('You have tried to ' +
        " ".concat(action, " \"").concat(valueName, "\"") +
        ' on a WalletContext without providing one.' +
        ' Make sure to render a WalletProvider' +
        ' as an ancestor of the component that uses ' +
        'WalletContext');
}
export var WalletContext = createContext(DEFAULT_CONTEXT);
export function useWallet() {
    return useContext(WalletContext);
}
