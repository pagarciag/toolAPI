import express, { Express, Request, Response } from 'express';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();

export const app: Express = express();
const port = process.env.PORT;
app.use(router);

app.listen(port, () => {
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