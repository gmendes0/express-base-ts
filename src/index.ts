import express from "express";
import { route } from "./routes";

const app = express();

app.listen(3333);
app.use(route);
