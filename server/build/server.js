"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port_1 = __importDefault(require("./port"));
const App = express_1.default();
App.use(express_1.default.json());
App.use(express_1.default.urlencoded({ extended: true }));
App.use(cors_1.default());
App.get('/', (req, res) => {
    res.send('hello server');
});
App.listen(port_1.default, () => {
    console.log('SERVER START ON PORT', port_1.default);
});
//# sourceMappingURL=server.js.map