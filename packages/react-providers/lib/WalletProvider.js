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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// /*
//  * This provider provides an API for the 
//  * 
//  * 
//  */
var react_1 = require("react");
var useWallet_1 = require("./useWallet");
var WalletProvider = function (_a) {
    var children = _a.children, supportedWallets = _a.supportedWallets;
    // Wallet that user chose
    var _b = (0, react_1.useState)(null), wallet = _b[0], setWallet = _b[1];
    var _c = (0, react_1.useState)(false), connected = _c[0], setConnected = _c[1];
    var _d = (0, react_1.useState)(false), connecting = _d[0], setConnecting = _d[1];
    var connect = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (wallet == null) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setConnecting(true);
                    return [4 /*yield*/, wallet.adapter.connect()];
                case 2:
                    _a.sent();
                    setConnected(true);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    setConnected(false);
                    return [3 /*break*/, 4];
                case 4:
                    setConnecting(false);
                    return [2 /*return*/];
            }
        });
    }); }, [wallet]);
    var disconnect = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setConnected(false);
            setWalletAndUpdateStorage(null);
            return [2 /*return*/];
        });
    }); };
    // Use this to update wallet so that the chosen wallet persists after reload.
    var setWalletAndUpdateStorage = (0, react_1.useCallback)(function (selectedWallet) {
        setWallet(selectedWallet);
        if (selectedWallet != null) {
            localStorage.setItem('suiWallet', selectedWallet.adapter.name);
        }
        else {
            localStorage.removeItem('suiWallet');
        }
    }, []);
    // Changes the selected wallet
    var choose = (0, react_1.useCallback)(function (name) {
        var newWallet = supportedWallets.find(function (wallet) { return wallet.adapter.name === name; });
        if (newWallet) {
            setWalletAndUpdateStorage(newWallet);
        }
        connect();
    }, [supportedWallets, connect, setWalletAndUpdateStorage]);
    // If the wallet is null, check if there isn't anything in local storage
    // Note: Optimize this.
    (0, react_1.useEffect)(function () {
        if (!wallet && !connected && !connecting) {
            var walletItem = localStorage.getItem('suiWallet');
            if (typeof walletItem === 'string') {
                var items = walletItem;
                choose(items);
            }
        }
    }, [choose, connected, connecting, wallet]);
    // Returns all accounts (i.e. public keys) managed by the selected wallet
    var getAccounts = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (wallet == null)
                        throw Error('Wallet Not Connected');
                    return [4 /*yield*/, wallet.adapter.getAccounts()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    // Requests wallet for signature and executes if signed
    var executeMoveCall = function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (wallet == null)
                        throw Error('Wallet Not Connected');
                    return [4 /*yield*/, wallet.adapter.executeMoveCall(transaction)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    // Requests wallet for signature on serialized transaction and executes if signed
    var executeSerializedMoveCall = function (transactionBytes) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (wallet == null)
                        throw Error('Wallet Not Connected');
                    return [4 /*yield*/, wallet.adapter.executeSerializedMoveCall(transactionBytes)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    // Attempt to connect whenever user selects a new wallet
    (0, react_1.useEffect)(function () {
        if (wallet != null &&
            connecting !== true &&
            connected !== true) {
            connect();
        }
    }, [connect, wallet, connecting, connected]);
    // Whenever the user selectes a new wallet
    return ((0, jsx_runtime_1.jsx)(useWallet_1.WalletContext.Provider, __assign({ value: {
            supportedWallets: supportedWallets,
            wallet: wallet,
            connecting: connecting,
            connected: connected,
            select: choose,
            connect: connect,
            disconnect: disconnect,
            getAccounts: getAccounts,
            executeMoveCall: executeMoveCall,
            executeSerializedMoveCall: executeSerializedMoveCall
        } }, { children: children })));
};
exports.WalletProvider = WalletProvider;
