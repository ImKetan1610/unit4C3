const express = require("express");
const User = require("./user.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.get("", async (req,res) => {
    try{
        const user = await User.find().limit(10).lean().exec();
        return res.status(200).send(user)

    }
    catch(error){
        return res.status(500).send(error)
    }
    
})

module.exports = router;