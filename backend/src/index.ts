import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import apodRoute from "./routes/apodRoute";

const app: Express = express();
const port: Number = Number(process.env.PORT) || 3000;

app.use(bodyParser({ extended: false }));
app.use(cors());

app.use("/api", apodRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("404\nThere is nothing here...");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
