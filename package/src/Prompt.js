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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var FormModal_1 = __importDefault(require("./FormModal"));
var antd_1 = require("antd");
var Prompt = function (_a) {
    var onOk = _a.onOk, label = _a.label, initialValue = _a.initialValue, children = _a.children, otherProps = __rest(_a, ["onOk", "label", "initialValue", "children"]);
    var handleOk = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (onOk === null || onOk === void 0 ? void 0 : onOk(values.input))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(FormModal_1.default, __assign({ onOk: handleOk }, otherProps),
        react_1.default.createElement(antd_1.Form.Item, { name: "input", label: label, initialValue: initialValue, required: true, rules: [{ required: true }] }, children)));
};
Prompt.prompt = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var visible, onCancel, onOk, otherPromptProps;
    return __generator(this, function (_a) {
        visible = props.visible, onCancel = props.onCancel, onOk = props.onOk, otherPromptProps = __rest(props, ["visible", "onCancel", "onOk"]);
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var div = document.createElement('div');
                document.body.appendChild(div);
                var destroy = function () {
                    var _a;
                    var unmountResult = react_dom_1.default.unmountComponentAtNode(div);
                    if (unmountResult) {
                        (_a = div.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(div);
                    }
                };
                var handleCancel = function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, reject()];
                            case 1:
                                _a.sent();
                                destroy();
                                return [2 /*return*/];
                        }
                    });
                }); };
                var handleOk = function (value) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, resolve(value)];
                            case 1:
                                _a.sent();
                                destroy();
                                return [2 /*return*/];
                        }
                    });
                }); };
                react_dom_1.default.render(react_1.default.createElement(Prompt, __assign({ visible: true, onCancel: handleCancel, onOk: handleOk }, otherPromptProps)), div);
            })];
    });
}); };
exports.default = Prompt;
