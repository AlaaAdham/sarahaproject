import nodemailer from "nodemailer";
export async function sendemail(to,subject,html){
const transporter = nodemailer.createTransport({
 service:'gmail',
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.email,
    pass: process.env.passwordsend
  }
});

// async..await is not allowed in global scope, must use a wrapper
 
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from:` "Fred Foo 👻" <${process.env.email}>`, // sender address
    to,
    subject,
    html,
  });

}
