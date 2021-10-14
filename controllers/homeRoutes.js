const router = require('express').Router();
const nodemailer = require("nodemailer");

router.get('/', async (req, res) => {
    res.render('home', { pageTitle: "Kevin Chewning Portfolio" });
});

router.post('/contactme', async (req, res) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAILUSER,
          pass: process.env.EMAILPASS,
        },
    });

    let info = await transporter.sendMail({
        from: `"${req.body.name} ${req.body.email}" <klcbusiness@hotmail.com>`, // sender address
        to: "klcbusiness@hotmail.com", // list of receivers
        subject: req.body.subject + " sent from portfolio", // Subject line
        text: req.body.message + "\n" + req.body.email, // plain text body
    });

    res.status(200).json(info)
})

module.exports = router;