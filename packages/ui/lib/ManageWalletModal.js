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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageWalletModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var sui_wallet_adapter_react_1 = require("sui-wallet-adapter-react");
var Settings_1 = __importDefault(require("@mui/icons-material/Settings"));
function ManageWalletModal(props) {
    var _a = (0, sui_wallet_adapter_react_1.useWallet)(), connected = _a.connected, disconnect = _a.disconnect, wallet = _a.wallet, getAccounts = _a.getAccounts;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(""), account = _c[0], setAccount = _c[1];
    var PK_DISPLAY_LENGTH = 10;
    (0, react_1.useEffect)(function () {
        getAccounts().then(function (accounts) {
            if (accounts && accounts.length) {
                setAccount(accounts[0]);
            }
        });
    }, [wallet, getAccounts]);
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClickDisconnect = function () {
        disconnect();
        setOpen(false);
    };
    var handleClose = function (value) {
        setOpen(false);
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
    var ManageWalletButtonStyle = {
        borderRadius: 7,
        backgroundColor: '#6fbcf0',
        fontWeight: 600
    };
    var handleCopyAddress = function () {
        navigator.clipboard.writeText(account);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (connected && wallet) &&
            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Button, __assign({ color: "primary", variant: "contained", style: ManageWalletButtonStyle, onClick: handleClickOpen }, { children: [(0, jsx_runtime_1.jsx)(Settings_1.default, {}), " ", account.slice(0, PK_DISPLAY_LENGTH), "..."] })), (0, jsx_runtime_1.jsx)(material_1.Modal, __assign({ open: open, onClose: handleClose }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: style }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { id: "modal-modal-title", variant: "h6", component: "h2" }), (0, jsx_runtime_1.jsxs)(material_1.List, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemButton, __assign({ onClick: handleClickDisconnect }, { children: (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: "Disconnect" }) })), (0, jsx_runtime_1.jsx)(material_1.ListItemButton, __assign({ onClick: handleCopyAddress }, { children: (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: "Copy Address" }) }))] })] })) }))] }) }));
}
exports.ManageWalletModal = ManageWalletModal;
