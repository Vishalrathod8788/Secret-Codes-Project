import express from "express";
import secretRoutes from "./routes/secretRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", secretRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
