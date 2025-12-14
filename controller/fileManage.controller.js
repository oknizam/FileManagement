const fs = require("fs");
const path = require("path");
const zlib = require("zlib"); // handle zip file

const readFilePath = path.join(__dirname, "../txt_file.txt");
const writeFilePath = path.join(__dirname, "../sample_txt.zip");


const handleReadFileSinglePass = (req, res) => {
  fs.readFile(readFilePath, (err, data) => {
    console.log("Err handleReadFileSinglePass", err)
    return res.end(data);
  })
}


const handleReadFileByChunk = (req, res) => {
  try {
    // creating stream
    const stream = fs.createReadStream(readFilePath);  // additional response header is added transfer-encoding chunked totell browser to not close request beacuse data is loading in chunks
    stream.on("data", (chunk) => {
      return res.write(chunk)
    });
    stream.on("end", () => {
      return res.end();
    })
  }
  catch (err) {
    console.log("file read error", err)
  }
}

const handleWriteFileByChunk = (req, res) => {
  try {
    // creating stream
    const stream = fs.createReadStream(readFilePath);
    stream.pipe(zlib.createGzip().pipe(fs.createWriteStream(writeFilePath))); // use pipe to perfom next task in pipeline a -> pipe -> b task pipe -> c task
    return res.status(200).send({ "responseText": "File written successfully" })
  }
  catch (err) {
    console.log("file read error", err)
  }
}

module.exports = {
  handleReadFileSinglePass,
  handleReadFileByChunk,
  handleWriteFileByChunk
}