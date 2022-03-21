const express = require("express");
const Publication = require("./publication.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const publication = await Publication.create(req.body);
        return res.status(201).send(publication);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;