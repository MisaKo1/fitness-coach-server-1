import express from "express";
import dotenv from "dotenv";
dotenv.config(); //načte .env soubor do process.env
//process.env.PORT
import cors = require("cors");
import db from "./models/index";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: false, alter: false });

app.use(`/api/v${process.env.API_VER}/user`, require("./routes/user"));

app.listen(PORT, () => {
  console.log(`app is running ${PORT}`);
});
