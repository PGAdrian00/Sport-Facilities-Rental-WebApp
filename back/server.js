const express = require("express")
const router = require('./routes');
const cors = require("cors");
const config = require("./config/config.json");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(
    cors({
      origin: config.frontend_url, // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // allow session cookie from browser to pass through,
    })
  );






app.use("/api", router);
app.use("/main", ()=>{
  console.log("Hello sir");
})

const port = 8080;
app.listen(port, ()=>{
    console.log("Server works on port "+ port);
});




