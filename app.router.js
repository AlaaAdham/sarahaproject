import { signupp } from './controling/signup/signup.js';
import connectdb from './DB/connection.js';
import { loginrouter } from './controling/login/app.router.js';
import { routerofmessage } from './controling/message/app.js';
import routerprofile from './User/user.router.js';
import { mid } from './controling/Middleware/middle.app.js';
const init=(app,express)=>{
connectdb();
app.use(express.json());
app.use('/page1',signupp);
app.use('/page2',loginrouter);
app.use('/page4',routerprofile);
app.use('/page5',mid);
app.use('/page6',routerofmessage );
}
export default init;