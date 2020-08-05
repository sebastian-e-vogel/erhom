require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const { appConfig, mongoConfig } = require("./config");

mongoose
  .connect(mongoConfig.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conectado a la base");
app.listen(4000, () => console.log(`listen on port: ${appConfig.port}`));
})
.catch((error) => {
  console.log("error", error);
});
