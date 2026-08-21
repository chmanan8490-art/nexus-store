import express, { type Express } from "express";
import cors from "cors";
import router from "./routes/index.js"; // <--- Here: added .js extension

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/api", router);

export default app;