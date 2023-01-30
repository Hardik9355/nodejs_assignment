const express =  require("express")
const app = express();
app.use(express.json({extended : false }));
app.get("/", (req,res) => res.send("Server running"));
const PORT  = process.env.PORT || 8000;
app.listen(PORT,()=> {
    console.log("Hello! How are you ")
});
