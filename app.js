/* These lines of code are importing various modules in JavaScript. */
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import axios from "axios";


const app=express();
const port=3000;


/* The line `app.set('ejs','view engine');` is configuring the Express application to use EJS (Embedded
JavaScript) as the view engine. This means that the application will be able to render EJS templates
and serve them as HTML to the client. */
app.set('view engine','ejs');

/* The line `app.use(express.static("public"));` is configuring the Express application to serve static
files from the "public" directory. This means that any files placed in the "public" directory can be
accessed by the client directly without any additional routing or processing by the server. */
app.use(express.static("./public"));
/* The line `app.use(bodyParser.urlencoded({extended:true}));` is configuring the Express application
to use the `body-parser` middleware. */
app.use(bodyParser.urlencoded({extended:true}));









app.get("/",async (req,res)=>{
    const batman=await axios("https://superheroapi.com/api/1230190087334410/180");
   const data=batman.data;
   const image=data.image.url;
   console.log(data);

    res.render("home",{
        batman:batman.data,
        url:image
    })
})



app.listen(port,()=>{
    console.log("server is running on port 3000");
})
