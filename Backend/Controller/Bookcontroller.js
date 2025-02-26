import Book from "../Model/Bookmodel.js";

export const getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getBookbyName = async (req, res) => {
  try {
    const { title } = req.params;
    if (!title) {
      return res.status(400).json("title required");
    }
    const book = await Book.find({ title: { $regex: title, $options: "i" } });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};
