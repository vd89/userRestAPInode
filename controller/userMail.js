import { createTransport } from "nodemailer";
import config from 'config';

export default function userMail(email,name,token) {
  let transporter = createTransport({
    host: config.get('hostEmail.host'),
		port: config.get('hostEmail.port'),
		secure: true,
		auth: {
      user: config.get('hostEmail.user'),
			pass: config.get('hostEmail.password'),
		},
  });
  const emailSend = config.get('hostEmail.emailSend')
  transporter.sendMail({
		from: `"Dax Solutions" <${emailSend}>`,
		to: `${email}`,
		subject: 'Email Verification - Dax Solutions ',
		html: `Hello ${name}, 
            <br /> Greetings ! <br /><br />
            Email Verification Link :<a href="http://192.168.0.111:8082/verify/${token}">Click this link to verify</a>
            `,
	}).then((info) => {
    console.log(`Message sent: %s`, info.messageID);
  })
};
