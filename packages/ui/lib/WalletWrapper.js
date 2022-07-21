"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/*
 * Wraps around all UI components for the Wallet Adapter.
 * Import this component where you desire your "Connect Wallet" button to be.
 */
var material_1 = require("@mui/material");
// // import { ConnectWalletModal } from "./ConnectWalletModal"
// import { ManageWalletModal } from "./ManageWalletModal"
var theme = (0, material_1.createTheme)({
    typography: {
        "fontFamily": "\"IBM Plex Sans\", sans-serif",
    }
});
function WalletWrapper(_a) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(material_1.Button, {}) }));
}
exports.WalletWrapper = WalletWrapper;
