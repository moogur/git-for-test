import * as fs from "fs";

async function updateMajorVersion() {
  try {
    const version = JSON.parse(fs.readFileSync("./config/version/version.json", "utf8"));
    version.major += 1;
    fs.writeFileSync("./config/version/version.json", JSON.stringify(version, null, "  "));
    console.log("MAJOR version updated success");
  } catch (error) {
    console.log(error);
  }
}

updateMajorVersion();
