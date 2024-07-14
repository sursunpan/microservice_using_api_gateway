const express = require("express");
const { databaseConnection } = require("./database");
const { PORT } = require("./config");
const expressApp = require("./expressApp");

const StartServer = async () => {
  const app = express();
  await databaseConnection();

  await expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`Products app start listening on port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
