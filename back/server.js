const express = require("express")
const router = require('./routes');
const cors = require("cors");
const config = require("./config/config.json");
const bodyParser = require('body-parser');
const path = require("path");
const passport = require("passport");
const cookieSession=require("cookie-session");
const keys = require('./config/keys');

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

app.use(
  cookieSession({
    name:"facility-rental-session",
    keys:[keys.session.cookieKey],
    maxAge:24*60*60*1000,
  })
);


app.use(passport.initialize());
app.use(passport.session());




app.use("/api", router);
app.use("/main", ()=>{
  console.log("Hello sir");
})

const port = 8080;
app.listen(port, ()=>{
    console.log("Server works on port "+ port);
});




