const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport ({
    service: "gmail" , 
    auth:{
        user:"nevilbhanderi09@gmail.com" ,
        pass: "bgslbworpggjbmwh"
    },
});

module.exports.sendOtp = (to,otp) => {
    let mailOption ={
        from: "nevilbhanderi09@gmail.com",
        to:to,
        subject: "Your OTP is Here",
        text: `Your OTP is ${otp}`,
    };

    transport.sendMail(mailOption,(err)=>{
        err && console.log(err);
        
    });
};