"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const port = process.env.PORT;
exports.app.use(routes_1.default);
exports.app.listen(port, () => {
    console.log("     *           +              *              + ");
    console.log("             +          +                🌙      ");
    console.log("      +            *          +     *            ");
    console.log("                      +   /\\                    ");
    console.log("         +              .'  '.   *               ");
    console.log("                *      /======\\      +          ");
    console.log("                      ;:.  _   ;                 ");
    console.log("                      |:. (_)  |                 ");
    console.log("                      |:.  _   |                 ");
    console.log("            +         |:. (_)  |          *      ");
    console.log("                      ;:.      ;                 ");
    console.log("                    .' \\:.    / `.              ");
    console.log("                   / .-'':._.'`-. \\             ");
    console.log("                   |/    /||\\    \\|            ");
    console.log('                 _..--"""````"""--.._            ');
    console.log("           _.-'``                    ``'-._      ");
    console.log("         -'                                '-    ");
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});