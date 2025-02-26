import express from "express";
const app = express();
import dotenv from "dotenv";
import Mongodbconnect from "./data.js";
import Bookroute from "./Routes/Bookroute.js";
import cors from "cors";

dotenv.config();
const Port = process.env.Port;
const Mongodburl = process.env.Mongodburl;
app.use(express.json());

try {
  Mongodbconnect(Mongodburl);
  console.log("Mongodb connected");
} catch (error) {
  console.log("Error in connected mongodb", error);
}
app.use(cors());

app.use("/Books", Bookroute);
app.listen(Port);
