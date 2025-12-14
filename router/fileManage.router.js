const { handleReadFileSinglePass, handleReadFileByChunk, handleWriteFileByChunk } = require("../controller/filemanage.controller");

const Router = require("express").Router;

const fileManageRoute = Router();

fileManageRoute.get("/readFileBySinglePass", handleReadFileSinglePass);
fileManageRoute.get("/readFileByChunk", handleReadFileByChunk);
fileManageRoute.get("/writeFileByChunk", handleWriteFileByChunk);


module.exports = fileManageRoute;

