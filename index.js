const express =  require("express")
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
console.log(connectDB());
app.use(express.json({extended : false }));
app.get("/", (req,res) => res.send("Server running"));
app.post("/",(req,res)  => res.send("Server up"));
const PORT  = process.env.PORT || 5001;
app.listen(PORT,()=> {
    console.log("Hello! How are you ")
});
