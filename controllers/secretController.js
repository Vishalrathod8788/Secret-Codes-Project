import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FilePath = path.join(__dirname, "..", "secret.txt");

export const readFile = (req, res) => {
  fs.readFile(FilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({ message: "No Code Found" });
    } else {
      return res.status(200).send(data);
    }
  });
};

export const readList = (req, res) => {
  fs.readFile(FilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({ message: "No code found" });
    }
    const list = data.split("/n").filter((line) => line > 0);
    res.status(200).send(list);
  });
};

export const writeFileContent = (req, res) => {
  // write file content
  const { secret_message } = req.body;

  fs.writeFile(FilePath, secret_message, (err) => {
    if (!secret_message) {
      res.status(400).json({ message: "Secret message is required" });
    }
    if (err) {
      console.log(err);
      res.status(500).json({ message: `${err}, "Error Writing File"` });
    }
    res.status(201).json({ message: "data successfully write" });
  });
};
