const express =  require("express")
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const todo = require("./routes/todo");
connectDB();

app.use(express.json({extended : false }));
// const myLogger = function(req,res,next){
//     console.log("Logged in")
//     next()
    
// }
// app.use(myLogger)

app.get("/", (req,res) => res.send("Server running"));
app.post("/",(req,res)  => res.send("Server up"));
const PORT  = process.env.PORT || 5001;
app.listen(PORT,()=> {
    console.log("Hello! How are you ")
});
