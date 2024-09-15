import fs from "fs";
const createAfile = (fileName, fileData) => {
  fs.writeFileSync(`./root/${fileName}`, fileData);
};
export default createAfile;
