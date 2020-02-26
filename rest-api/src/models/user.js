const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    validate: email => {
      const regex = /\S+@\S+.\S+/;
      const errMsg = "Email address is invalid!";
      if (!regex.test(email)) {
        throw new Error(errMsg);
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate: password => {
      const errMsg = 'Password must not contain a word "password"!';
      if (/password/i.test(password)) {
        throw new Error(errMsg);
      }
    }
  }
});

module.exports = User;
