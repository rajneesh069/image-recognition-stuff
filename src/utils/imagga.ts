import { IMAGGA_API_KEY, IMAGGA_API_SECRET } from "./config";
import got from "got";

const apiKey = IMAGGA_API_KEY;
const apiSecret = IMAGGA_API_SECRET;

const imageTags = async (imageUrl: string) => {
  const url =
    "https://api.imagga.com/v2/tags?image_url=" + encodeURIComponent(imageUrl);
  try {
    const response = await got(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
          "base64"
        )}`,
      },
    });
    console.log(response.body);
  } catch (error: any) {
    console.log(error?.response?.body);
  }
};
