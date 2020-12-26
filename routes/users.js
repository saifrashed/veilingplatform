const router     = require('express').Router();
const bcrypt     = require('bcryptjs');
const jwt        = require('jsonwebtoken');
const auth       = require('../middleware/auth');
const mongoose   = require('mongoose');
const Users      = require('../models/users.model');
const nodemailer = require('nodemailer');

require('dotenv').config();


/**
 * Users read
 */
router.route('/').get(auth, async (req, res) => {
    Users.aggregate([
        {
            $match:
                {
                    _id: new mongoose.Types.ObjectId(req.user)
                }
        },
        {
            $lookup:
                {
                    from:         "roles",
                    localField:   "role",
                    foreignField: "_id",
                    as:           "role"
                },
        },
        {
            $lookup:
                {
                    from:         "events",
                    localField:   "_id",
                    foreignField: "user",
                    as:           "events"
                }
        }
    ])
         .then((user) => {
             res.json(user);
         })
         .catch(err => {
             res.status(400).json('Error: ' + err);
         })
});


/**
 * Users update
 */
router.route('/update/').post(auth, async (req, res) => {
    try {
        let {userName, userEmail, firstName, lastName, address, zipCode, city, country, mollieKey, mollieCustomerId, role} = req.body;

        const user = await Users.findById(req.user);


        user.userName         = userName || user.userName;
        user.userEmail        = userEmail || user.userEmail;
        user.firstName        = firstName || user.firstName;
        user.lastName         = lastName || user.lastName;
        user.address          = address || user.address;
        user.zipCode          = zipCode || user.zipCode;
        user.city             = city || user.city;
        user.country          = country || user.country;
        user.mollieKey        = mollieKey || user.mollieKey;
        user.mollieCustomerId = mollieCustomerId || user.mollieCustomerId;
        user.role             = role || user.role;

        const savedUser = await user.save();

        console.log(savedUser);


        res.json(savedUser);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


/**
 * Users register
 */
router.route('/register').post(async (req, res) => {
    try {
        let {userName, userEmail, userPassword, firstName, lastName, address, zipCode, city, country, mollieKey, mollieCustomerId, role} = req.body;

        // validate

        if (!userEmail || !userPassword || !firstName || !lastName)
            return res.status(400).json({msg: "Not all fields have been filled."});
        if (userPassword.length < 5)
            return res.status(400).json({msg: "The password is to be atleast 5 characters long."});

        const existingUser = await Users.findOne({userEmail: userEmail});

        if (existingUser)
            return res.status(400).json({msg: "An account with this email already exists."});

        if (!userName) {
            userName = userEmail;
        }

        const salt         = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(userPassword, salt);

        const newUser = new Users({
            userName,
            userEmail,
            firstName,
            lastName,
            address,
            city,
            country,
            zipCode,
            userPassword: passwordHash,
            mollieKey,
            mollieCustomerId,
            role
        });

        const savedUser = await newUser.save();

        res.json(savedUser);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


/**
 * Users Login
 */
router.route('/login').post(async (req, res) => {
    try {
        let {userEmail, userPassword} = req.body;

        // validate
        if (!userEmail || !userPassword)
            return res.status(400).json({msg: "Not all fields have been filled."});

        const user = await Users.findOne({userEmail: userEmail});

        if (!user)
            return res.status(400).json({msg: "No account with this email has been registered."});

        const isMatch = await bcrypt.compare(userPassword, user.userPassword);

        if (!isMatch)
            return res.status(400).json({msg: "Invalid credentials."});


        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        res.json({
            token,
            user: {
                id:       user._id,
                userName: user.userName,
                email:    user.userEmail
            }
        })

    } catch (err) {

    }
});


/**
 * Users delete
 */
router.route('/delete').delete(auth, async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.route('/verify').post(async (req, res) => {
    try {
        const token = req.header("x-auth-token");

        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified) return res.json(false);

        const user = await Users.findById(verified.id);

        if (!user) return res.json(false);

        return res.json(true);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


/**
 * Authentication mail
 * @type {Router|router}
 */
router.route('/authMail').post((req, res) => {

    let {userEmail, token} = req.body;

    var transport = nodemailer.createTransport({
        host: "mail.zxcs.nl",
        port: 465,
        auth: {
            user: "tickit@vorm.tech",
            pass: "Rashed112"
        }
    });

    transport.verify((err) => {
        if (err) console.error(err);
        console.log('Your config is correct');
    });

    var mailOptions = {
        from:    'tickit@vorm.tech',
        to:      userEmail,
        subject: 'TickIT Authentication',
        html:    authVerifyTemplate(process.env.BASE_URL, token)
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json("Mail error!");
        }

        return res.status(200).json("Mail has been sent!");
    });
});


module.exports = router;
