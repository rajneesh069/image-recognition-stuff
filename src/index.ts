import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import express, { Request, Response } from "express";
import { imageRecognitionController } from "./controllers/image.controllers";
import { upload } from "./middlewares/multer.middleware";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Perfect Health." });
});

app.post("/recognizeImage", upload.single("image"), imageRecognitionController);

app.listen(PORT, () => {
  console.log("Server is accessible at:", "http://localhost:" + PORT);
});
