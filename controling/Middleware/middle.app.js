import { Router } from 'express';
import { auth } from './middle.js';
export const mid=Router();
mid.get('/middle',auth);