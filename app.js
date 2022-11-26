import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pasienRouter from "./Routes/pasienRoute.js"
import docterRoute from "./Routes/docterRoute.js"
import rumahSakitRoute from "./Routes/rumahSakitRoute.js"

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/rumahsakit_db')
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database conneted...'))

app.use(cors());
app.use(express.json())
app.use(pasienRouter)
app.use(docterRoute)
app.use(rumahSakitRoute)

app.listen(port, () => {
    console.log(`Server On at http:localhost${port}`)
})