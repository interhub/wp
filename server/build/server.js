"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port_1 = __importDefault(require("./port"));
console.log('START SCRIPT');
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.get('/', (req, res) => {
    console.log('start');
    res.sendFile(process.cwd() + '/public/index.html');
});
app.get('*', (req, res) => {
    res.sendFile(process.cwd() + '/public' + req.url);
});
app.listen(port_1.default, () => {
    console.log('SERVER START ON PORT', port_1.default);
});
//# sourceMappingURL=server.js.map