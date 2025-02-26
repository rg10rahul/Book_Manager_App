import mongoose from "mongoose";

const Bookschema = mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  image: String,
});

const Book = mongoose.model("Book", Bookschema);

export default Book;
