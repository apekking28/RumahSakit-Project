import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/rumahsakit_db");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database conneted..."));

export default db;
