import express from "express";
import {
  readFile,
  readList,
  writeFileContent,
  appendFileContent,
  deleteFile,
  clearFile,
  metadataFile,
} from "../controllers/secretController.js";

const router = express.Router();

router.get("/", readFile);
router.get("/list", readList);
router.post("/", writeFileContent);
router.patch("/", appendFileContent);
router.delete("/", deleteFile);
router.patch("/clear", clearFile);
router.get("/metadata", metadataFile);

export default router;
