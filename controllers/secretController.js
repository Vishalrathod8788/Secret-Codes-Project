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
    const list = data.split("\n").filter((line) => line.length > 0);
    res.status(201).send(list);
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

export const appendFileContent = (req, res) => {
  const { secret_message } = req.body;
  if (!secret_message) {
    res.status(404).json({ message: "Data must be require" });
  }
  fs.appendFile(FilePath, `\n${secret_message}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Something wents wrong" });
    }
    res.status(201).send("Data sccessfully append");
  });
};

export const deleteFile = (req, res) => {
  fs.unlink(FilePath, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ message: "No code found" });
      }
      console.log(err);
      return res.status(500).json({ message: "something wents wrong" });
    }
    res.status(200).json({ message: "File successfully deleted" });
  });
};

export const clearFile = (req, res) => {
  if (!fs.existsSync(FilePath)) {
    return res.status(404).json({ message: "Code not found to clear" });
  }
  fs.writeFile(FilePath, "", (err) => {
    if (err) {
      return res.status(500).json({ message: "something wents wrong" });
    }
    return res
      .status(200)
      .json({ message: "File content cleared successfully" });
  });
};

export const metadataFile = (req, res) => {
  fs.stat(FilePath, (err, stat) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ message: "No code found" });
      }
      console.log(err);
      return res.status(500).json({ message: "Something want wrong" });
    }

    const metadata = {
      size: `${stat.size} bytes`,
      create: stat.birthtime.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      modified: stat.mtime.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    };

    res.status(200).json(metadata);
  });
};

export const serchFile = (req, res) => {
  const searchData = req.query.q;

  fs.readFile(FilePath, "utf-8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ message: "Code not found" });
      }
      return res.status(500).json({ message: "something wants wrong" });
    }
    const exists = data.toLowerCase().includes(searchData.toLowerCase());

    res.status(200).json({ found: exists });
  });
};

export const backupFile = (req, res) => {
  const { admin } = req.body;
  if (admin !== true) {
    return res.status(403).json({
      message: "Unauthorized: Access denied. Only admins can perform backup.",
    });
  }

  const backupPath = "secret_backup.txt";

  fs.copyFile(FilePath, backupPath, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({ message: "No code found" });
      }
      console.log(err);
      return res.status(500).json({ message: "something wants wrongs" });
    }

    res.status(200).json({
      message: "Backup file succssefully created",
      File: "secret_backup.txt",
    });
  });
};
