// git push -u origin master
import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
// require take node module form somewhere
// first require search express folder where index.js are
// if express is't here then search node)modules
const app = express();

// const handleHome = (req, res) => res.send("Hello from my ass");

// function handleProfile(req, res) {
//   res.send("You are on my profile");
// }
// it's same upper handleProfile function
// const handleProfile = (req, res) => res.send("You are on my Profile");

// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

// app.use(betweenHome); //middleware and handle home

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
// somebody import app.js, app.js give app object
