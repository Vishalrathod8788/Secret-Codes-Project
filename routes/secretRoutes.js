import express from "express";
import {
  readFile,
  readList,
  writeFileContent,
} from "../controllers/secretController.js";

const router = express.Router();

router.get("/", readFile);
router.get("/list", readList);
router.post("/", writeFileContent);

export default router;
