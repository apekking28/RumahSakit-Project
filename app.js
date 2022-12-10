import express from "express";
import db from "./utils/db.js";
import cors from "cors";
import pasienRouter from "./Routes/pasienRoute.js";
import docterRoute from "./Routes/docterRoute.js";
import rumahSakitRoute from "./Routes/rumahSakitRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(pasienRouter);
app.use(docterRoute);
app.use(rumahSakitRoute);

app.listen(port, () => {
  console.log(`Server On at http:localhost${port}`);
});
