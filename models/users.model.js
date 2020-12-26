const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

// User schema
const UsersSchema = new Schema({
    userName:         {
        type:      String,
        unique:    true,
        lowercase: true,
        index:     true
    },
    userEmail:        {
        type:      String,
        unique:    true,
        lowercase: true,
        required:  [true, "can't be blank"],
        match:     [/\S+@\S+\.\S+/, 'is invalid'],
        index:     true
    },
    firstName:        {
        type:     String,
        required: false
    },
    lastName:         {
        type:     String,
        required: false
    },
    address:          {
        type:     String,
        required: false
    },
    city:             {
        type:     String,
        required: false
    },
    country:          {
        type:     String,
        required: false
    },
    zipCode:          {
        type:     String,
        required: false
    },
    userPassword:     {
        type:     String,
        required: true
    },
    mollieKey:        {
        type:     String,
        required: false
    },
    mollieCustomerId: {
        type:     String,
        required: false
    },
    role:             {
        type:     mongoose.Schema.Types.ObjectId,
        required: false,
        ref:      'Roles'
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('Users', UsersSchema);
