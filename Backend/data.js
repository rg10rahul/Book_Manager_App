import mongoose from "mongoose";

async function Mongodbconnect(url) {
  const res = await mongoose.connect(url);
}

export default Mongodbconnect;
