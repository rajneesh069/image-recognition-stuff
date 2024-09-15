import { Request, Response } from "express";
import { imageTags } from "../utils/imagga";

export async function imageRecognitionController(req: Request, res: Response) {
  const imageUrl = req.body;
  try {
    const tags = await imageTags(imageUrl);
    return res.json({ tags, message: "Tags generated" }).status(200);
  } catch (error) {
    console.error(error);
    return res.json({ message: "Some error occured" }).status(500);
  }
}
