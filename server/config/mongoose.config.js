const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost/coin_collecting_app_db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Established connection with coin_collecting_app_db`))
  .catch((err) =>
    console.log("Something went wrong connecting to the database ", err)
  );
