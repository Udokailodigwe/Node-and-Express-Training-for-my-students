import { CustomAPIError } from "../errors/custom-error.js";

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Somthing went wrong, try again later." });
};

export default errorHandlerMiddleware;
