const express = require("express");
require("./src/database/mongoose");

const port = process.env.PORT || 3000;
const app = express();

// Start middleware config
app.use(express.json());
// End middleware config

// Start routes config
const userRoutes = require("./src/routes/user");

app.use(userRoutes);

// End routes config

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
