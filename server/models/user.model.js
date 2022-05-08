const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'First name is required'],
        minlength: [3,'First name must be at least 3 characters in length'],
    },
    lastName: {
        type: String,
        required: [true,'Last name is required'],
        minlength: [3,'Last name must be at least 3 characters in length']
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        minlength: [8,'Password must be 8 characters or longer']
    },
    
},{timestamps:true});

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => {
        this._confirmPassword = value;
    });

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt
        .hash(this.password, 10)
        .then((hash) => {
        this.password = hash;
        next();
        })
        .catch((err) => {
        console.log("error saving hash");
        console.log(err);
        });
});
module.exports = mongoose.model('User',UserSchema);
