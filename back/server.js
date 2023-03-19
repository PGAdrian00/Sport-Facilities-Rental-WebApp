const express = require("express")


const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port = 8080;

app.use("/", (req,res)=>{
    res.status(200).send({message:"app works!"});
})

app.listen(port, ()=>{
    console.log("Server works on port "+ port);
});



