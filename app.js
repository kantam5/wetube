import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; // not default
// require take node module form somewhere
// first require search express folder where index.js are
// if express is't here then search node)modules
const app = express();

const handleHome = (req, res) => res.send("Hello from my ass");

// function handleProfile(req, res) {
//   res.send("You are on my profile");
// }
// it's same upper handleProfile function
const handleProfile = (req, res) => res.send("You are on my Profile");

// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

// app.use(betweenHome); //middleware and handle home

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome); //route
// betweenHome is middleware that between home(/) and handleHome

app.use("/user", userRouter);

app.get("/profile", handleProfile);

export default app;
// somebody import app.js, app.js give app object
