import express from "express";
import createAfile from "./tools/createAfile.js";
import getAFile from "./tools/getAFile.js";
import getAllFiles from "./tools/getAllFilename.js";
import updateAfile from "./tools/updateAfile.js";
import deleteAFile from "./tools/deleteAFile.js";
const app = express();
const port = 8000;

app.use(express.json());

app.post("/file/create", (req, res) => {
  const { fileName, fileData } = req.body;
  createAfile(fileName, fileData);
  res.send({
    message: "File created successfully",
  });
});

app.delete("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  if (deleteAFile(filename)) {
    res.send({
      message: "File Deleted Successfully",
    });
  }
  res.send({
    message: "Provide a valid file name",
  });
});

app.get("/file", (req, res) => {
  const allFiles = getAllFiles();
  res.send({
    files: allFiles,
  });
});

app.get("/file/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const ans = getAFile(fileName);
  if (ans != false) {
    res.send({
      fileContent: ans,
      message: "success",
    });
  }
  res.send({
    message: "File does not exist",
  });
});

app.put("/file/:filename", (req, res) => {
  const fileName = req.params.filename;
  const { updatedFileName, newFileData } = req.body;
  if ((updatedFileName || newFileData) && fileName) {
    const message = updateAfile(fileName, updatedFileName, newFileData);
    if (message == "File updated successfully") {
      res.send({
        message: message,
      });
    }
    res.send({
      message: message,
    });
  } else {
    res.send({
      message: "Provide all data",
    });
  }
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
