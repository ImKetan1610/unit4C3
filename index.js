 const express = require("express");

 const connect = require("./db");

 const app = express();

 app.use(express.json());

 const userController = require("./user.controller");
 const bookController = require("./book.controller");
 const publicationController = require("./publication.controller");
 const commentController = require("./comment.controller");


 app.use("/user", userController);
 app.use("/book",bookController);
 app.use("/publication",publicationController);
 app.use("/comment",commentController);



 app.listen(1234, async() => {
     try {
         await connect();
         console.log("Listening on port 1234")
     } catch (err) {
         console.error(err.message);
     }
 })