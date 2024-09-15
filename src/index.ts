import express, { Request, Response } from "express";
import { imageRecognitionController } from "./controllers/image.controllers";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Perfect Health." }).status(200);
});

app.post("/recognizeImage", imageRecognitionController);

app.listen(PORT, () => {
  console.log("Server is accessible at:", "http://localhost:" + PORT);
});
