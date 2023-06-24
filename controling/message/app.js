import  { getmessage, sendmessage } from './message.js';
import { Router } from 'express';
import { auth } from './../Middleware/middle.js';
export const routerofmessage=Router();
routerofmessage.get('/message',auth, getmessage);
routerofmessage.post('/:receveid',sendmessage);



