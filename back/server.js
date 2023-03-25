const express = require("express")
const router = require('./routes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(
    cors({
      origin: config.frontend_url, // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // allow session cookie from browser to pass through,
    })
  );

app.use("/api", router);


app.use("/", (req,res)=>{
    res.status(200).send({message:"app works!"});
})

const port = 8080;
app.listen(port, ()=>{
    console.log("Server works on port "+ port);
});




