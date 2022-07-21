"use strict";
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
exports.MockWalletAdapter = void 0;
var ALL_PERMISSION_TYPES = [
    'viewAccount',
    'suggestTransactions',
];
// Stored as state somewhere (Probably in a place with generics )
var MockWalletAdapter = /** @class */ (function () {
    function MockWalletAdapter(name) {
        this.connected = false;
        this.connecting = false;
        this.name = name;
    }
    MockWalletAdapter.prototype.getAccounts = function () {
        return window.suiWallet.getAccounts();
    };
    MockWalletAdapter.prototype.executeMoveCall = function (transaction) {
        return window.suiWallet.executeMoveCall(transaction);
    };
    MockWalletAdapter.prototype.executeSerializedMoveCall = function (transactionBytes) {
        return window.suiWallet.executeSerializedMoveCall(transactionBytes);
    };
    MockWalletAdapter.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wallet, given, newLocal, perms, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.connecting = true;
                        if (!window.suiWallet) return [3 /*break*/, 6];
                        wallet = window.suiWallet;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, wallet.requestPermissions()];
                    case 2:
                        given = _a.sent();
                        newLocal = ['viewAccount'];
                        return [4 /*yield*/, wallet.hasPermissions(newLocal)];
                    case 3:
                        perms = _a.sent();
                        console.log(perms);
                        console.log(given);
                        this.connected = true;
                        return [3 /*break*/, 6];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 6];
                    case 5:
                        this.connecting = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // Come back to this later
    MockWalletAdapter.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.connected == true) {
                    this.connected = false;
                }
                console.log("disconnected");
                return [2 /*return*/];
            });
        });
    };
    return MockWalletAdapter;
}());
exports.MockWalletAdapter = MockWalletAdapter;
