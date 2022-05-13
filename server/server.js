require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
// credentials: true sets up express to get cookie in request header. origin sets the client URL for server to accept requests
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/user.routes")(app);
require("./routes/coin.routes")(app);

const jwt = require("jsonwebtoken");

app.listen(process.env.PORT, () =>
  console.log(`Express is running on ${process.env.PORT}`)
);
