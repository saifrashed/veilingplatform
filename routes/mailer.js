const router   = require('express').Router();
var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "mail.zxcs.nl",
    port: 465,
    auth: {
        user: "info@saifrashed.nl",
        pass: "Rashed112"
    }
});

/**
 * default mailer
 */
router.route('/').post((req, res) => {
    transport.verify((err) => {
        if (err) console.error(err);
        console.log('Your config is correct');
    });

    var mailOptions = {
        from:    req.body.rnEmail,
        to:      'info@saifrashed.nl',
        subject: 'Contact formulier: ' + req.body.rnName,
        html:    '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
                     '<head>\n' +
                     '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n' +
                     '<title>Saif Rashed Contact formulier</title>\n' +
                     '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n' +
                     '</head>\n' +
                     '<body style="margin: 0; padding: 0;">\n' +
                     '    <table border="0" cellpadding="0" cellspacing="0" width="100%"> \n' +
                     '        <tr>\n' +
                     '            <td style="padding: 10px 0 30px 0;">\n' +
                     '                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">\n' +
                     '                    <tr>\n' +
                     '                        <td bgcolor="#1A1A1A" style="padding: 40px 30px 40px 30px;">\n' +
                     '                        <img src="http://admin.saifrashed.nl/wp-content/uploads/2020/05/logo_symbol-2.png" height="50" width="auto"/>\n' +
                     '                        </td>\n' +
                     '                    </tr>\n' +
                     '                    <tr>\n' +
                     '                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">\n' +
                     '                            <table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
                     '                                <tr>\n' +
                     '                                    <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">\n' +
                     '                                        <b>' + req.body.rnSubject + '</b>\n' +
                     '                                    </td>\n' +
                     '                                </tr>\n' +
                     '                                <tr>\n' +
                     '                                    <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">\n' + req.body.rnMessage +
                     '                                    </td>\n' +
                     '                                </tr>\n' +
                     '                            </table>\n' +
                     '                        </td>\n' +
                     '                    </tr>\n' +
                     '                    <tr>\n' +
                     '                        <td bgcolor="#F0084A" style="padding: 30px 30px 30px 30px;">\n' +
                     '                            <table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
                     '                                <tr>\n' +
                     '                                    <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">\n' +
                     '                                        &reg; Saif Rashed Software<br/>\n' +
                     '                                         Verstuur via <a href="https://saifrashed.nl" style="color:#fff">saifrashed.nl</a> contact formulier.\n' +
                     '                                    </td>\n' +
                     '                                </tr>\n' +
                     '                            </table>\n' +
                     '                        </td>\n' +
                     '                    </tr>\n' +
                     '                </table>\n' +
                     '            </td>\n' +
                     '        </tr>\n' +
                     '    </table>\n' +
                     '</body>\n' +
                     '</html>'
    };


    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.sendStatus(500).json("Mail error!");
        }

        return res.sendStatus(200).json("Mail has been sent!");
    });
});


module.exports = router;
