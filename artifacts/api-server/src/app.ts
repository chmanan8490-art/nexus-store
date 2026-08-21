import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Support both root and /api paths on Vercel
app.use("/", router);
app.use("/api", router);

export default app;