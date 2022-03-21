const express = require("express");
const Book = require("./book.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const book = await Book.create(req.body);
        return res.status(201).send(book);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;