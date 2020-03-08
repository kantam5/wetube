import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
// if I save local valuable in locals, I can use it in template

export const uploadVideo = multerVideo.single("videoFile");
