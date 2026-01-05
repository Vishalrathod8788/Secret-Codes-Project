import express from "express";
import {
  readFile,
  readList,
  writeFileContent,
  appendFileContent,
  deleteFile,
  clearFile,
  metadataFile,
  serchFile,
  backupFile,
} from "../controllers/secretController.js";

const router = express.Router();

router.get("/", readFile);
router.get("/list", readList);
router.post("/", writeFileContent);
router.patch("/", appendFileContent);
router.delete("/", deleteFile);
router.patch("/clear", clearFile);
router.get("/metadata", metadataFile);
router.get("/search", serchFile);
router.post("/backup", backupFile);

export default router;
