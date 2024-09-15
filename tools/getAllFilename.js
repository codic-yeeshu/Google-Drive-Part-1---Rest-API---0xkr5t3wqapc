import fs from "fs";
const getAllFiles = () => {
  const allFiles = fs.readdirSync("./root");
  return allFiles;
};

export default getAllFiles;
