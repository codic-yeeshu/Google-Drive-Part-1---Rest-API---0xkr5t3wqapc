import fs from "fs";
const updateAfile = (oldFileName, updatedFileName, newFileData) => {
  const allFiles = fs.readdirSync("./root");
  const fileLocation = `./root/${oldFileName}`;
  if (allFiles.includes(updatedFileName)) {
    return "file already exist";
  }
  if (fs.existsSync(fileLocation)) {
    fs.unlinkSync(fileLocation);
    fs.writeFileSync(`./root/${updatedFileName}`, newFileData);
    return "File updated successfully";
  }
  return "The file you want to update does not exists";
};

export default updateAfile;
