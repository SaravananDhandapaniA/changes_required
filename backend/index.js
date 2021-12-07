var express = require("express");
const {sequelize}=require("./models");
const {getadmins,postadmin}=require("./controller/admintablecontroller");
const {gettranscation,posttranscation}=require("./controller/booktranscationcontroller")
const { getbook, postbook } = require("./controller/bookdetailscontroller");
const app=express();
const cors=require('cors');
const signupcontrol = require('./controller/signupcontrol')


app.use(cors({
    origin:"*"
}));
app.use(express.json());

app.get("/admins",getadmins);
app.post("/admins",postadmin);
// app.get("/users",getuser);
// app.post("/users",postuser);
app.get("/transcation",gettranscation);
app.post("/transcation",posttranscation)
app.get("/books",getbook);
app.post("/books",postbook);
app.post("/add", signupcontrol.addUser);
app.post("/login", signupcontrol.log)

const PORT=5016;
app.listen({port:PORT},async()=>
   {console.log(`server running ${PORT}`)
   try{
   await sequelize.authenticate();
   }
   catch(e){
       console.log(e);
   }
});