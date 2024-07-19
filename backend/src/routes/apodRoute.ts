import { Router, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const router: Router = Router();

const API_KEY = process.env.API_KEY;

export default router.get(
  "/apod",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const apodRes: any = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      const data: any = await apodRes.json();
      res.send(data);
    } catch (error: unknown) {
      res.status(500).json({ error: "Unable to fetch image!" });
    }
  }
);

module.exports = router;
