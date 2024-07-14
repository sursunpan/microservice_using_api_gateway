const express = require("express");
const { databaseConnection } = require("./database");
const expressApp = require("./expressApp");
const { PORT } = require("./config");

const StartServer = async () => {
  const app = express();
  await databaseConnection();

  await expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`Customer service listen on port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
