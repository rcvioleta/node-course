// Next Topic: 5. Data Validation and Sanitazion Part II

const mongoose = require("mongoose");

const dsn = "mongodb://127.0.0.1:27017/ecommerce";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(dsn, options);

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    validate: email => {
      const regex = /\S+@\S+.\S+/;
      if (!regex.test(email)) {
        throw new Error("Email address is invalid!");
      }
    }
  }
});

const newUser = new User({
  name: "Super Admin",
  age: "27",
  email: "super-admin@test.com"
});

newUser
  .save()
  .then(res => console.log(res))
  .catch(e => console.log(e));
