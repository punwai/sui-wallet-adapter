"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectWalletModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var sui_wallet_adapter_react_1 = require("sui-wallet-adapter-react");
function ConnectWalletModal(props) {
    var connected = (0, sui_wallet_adapter_react_1.useWallet)().connected;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var _b = (0, sui_wallet_adapter_react_1.useWallet)(), supportedWallets = _b.supportedWallets, wallet = _b.wallet, select = _b.select, connecting = _b.connecting;
    var handleConnect = function (walletName) {
        select(walletName);
        handleClose();
    };
    var style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
    };
    var connectButtonStyle = {
        borderRadius: 7,
        backgroundColor: '#6fbcf0',
        fontWeight: 600
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (!connected) && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, __assign({ style: connectButtonStyle, variant: "contained", onClick: handleClickOpen }, { children: "Connect To Wallet" })), console.log(open), (0, jsx_runtime_1.jsx)(material_1.Modal, __assign({ open: open, onClose: handleClose }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!connecting && (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: style }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ id: "modal-modal-title", variant: "h6", component: "h2", align: "center" }, { children: "Select Wallet" })), (0, jsx_runtime_1.jsx)(material_1.List, { children: supportedWallets.map(function (w) {
                                            return (0, jsx_runtime_1.jsx)(material_1.ListItemButton, __assign({ onClick: function () { return handleConnect(w.adapter.name); } }, { children: (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: w.adapter.name }) }));
                                        }) })] })), connecting && (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: style }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ id: "modal-modal-title", variant: "h6", component: "h2" }, { children: "Connecting to wallet." })), (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {})] }))] }) }))] }) }));
}
exports.ConnectWalletModal = ConnectWalletModal;
