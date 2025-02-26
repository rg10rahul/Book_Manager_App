import express from "express";
import { getBookbyName, getBooks } from "../Controller/Bookcontroller.js";
const router = express.Router();

router.route("/").get(getBooks);
router.get("/:title", getBookbyName);

export default router;
