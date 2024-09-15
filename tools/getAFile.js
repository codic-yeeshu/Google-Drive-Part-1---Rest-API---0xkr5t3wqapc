import fs from "fs";
const getAFile = (fileName) => {
  const allFiles = fs.readdirSync("./root");
  if (allFiles.includes(fileName)) {
    const data = fs.readFileSync(`./root/${fileName}`, "utf-8");
    return data;
  }
  return false;
};

export default getAFile;
