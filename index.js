const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const fileManageRoute = require("./router/filemanage.router");

const app = express();

app.use(status());

app.use("/file", fileManageRoute);

app.listen(9000, () => {
  console.log("Listening PORT:9000")
})



