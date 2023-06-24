import express from 'express';
import init from './app.router.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 4000;
init(app,express);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))