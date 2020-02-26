const bcrypt = require("bcryptjs");

const checkPass = async (pass, hashedPass) => {
  try {
    const res = await bcrypt.compare(pass, hashedPass);
    console.log("Password matched!", res);
  } catch (e) {
    console.log("Unable to check password: ", e);
  }
};

const hashPass = async pass => {
  try {
    const hashed = await bcrypt.hash(pass, 8);
    checkPass(pass, hashed);
  } catch (e) {
    console.log("Hashing failed: ", e);
  }
};

hashPass("rvioleta_13");
