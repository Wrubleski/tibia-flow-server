exports.error404 = (req, res, next) => {
  const error = new Error("Error 404, page not found!");
  error.status = 404;
  next(error);
};
