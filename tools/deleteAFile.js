import fs from "fs";
const deleteAFile = (fileName) => {
  const fileLocation = `./root/${fileName}`;
  if (fs.existsSync(fileLocation)) {
    fs.unlinkSync(fileLocation);
    return true;
  }
  return false;
};

export default deleteAFile;
