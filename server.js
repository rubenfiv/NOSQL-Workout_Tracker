const express = require("express");
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}))

app.use(express.json())

const htmlRoute = require("./controller/htmlroutes")

app.use(htmlRoute);

const apiRoute = require("./controller/apiroutes")

app.use(apiRoute);

 const mongoose = require("mongoose")

 mongoose.connect(
     process.env.MONGODB_URI ||"mongodb://localhost/workout",
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }    
     );

app.listen(port, function (){
    console.log("App is listening on port:" + port)
})
