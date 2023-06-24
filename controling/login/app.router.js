import { Router } from 'express';
import { login } from './login.js';
export const loginrouter=Router();
loginrouter.post("/login",login);

