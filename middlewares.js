import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};
// if I save local valuable in locals, I can use it in template
