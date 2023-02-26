require("dotenv").config();
// Libreries
import nodemail from 'nodemailer';
const {v4:uuid} = require("uuid4");

let transporter = nodemail.createTransport({
    service : "gmail",
    secure: true, 
    auth : {
        user : process.env.AUTH_NODEMAILER_MAIL,
        pass : process.env.AUTH_NODEMAILER_PASS,
    }
});

export default transporter;