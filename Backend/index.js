import express from "express";
const app = express();
import dotenv from "dotenv";
import Mongodbconnect from "./data.js";
import Bookroute from "./Routes/Bookroute.js";
import cors from "cors";

dotenv.config();
const Port = process.env.PORT;
const Mongodburl = process.env.MONGODB_URL;
app.use(express.json());
app.get("/", (req,res) => {
  console.log("Backend is running");
  res.send("Backend is running");
})
try {
  Mongodbconnect(Mongodburl);
  console.log("Mongodb connected");
} catch (error) {
  console.log("Error in connected mongodb", error);
}
app.use(cors());

app.use("/books", Bookroute);
app.listen(Port, () => {
  console.log(`App is running on Port : ${Port}`)
});
