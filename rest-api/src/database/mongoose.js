const mongoose = require("mongoose");

const dsn = "mongodb://127.0.0.1:27017/ecommerce";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(dsn, options);
