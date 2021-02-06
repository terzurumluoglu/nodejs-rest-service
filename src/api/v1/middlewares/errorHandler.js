const ErrorResponse = require('../utils/errorResponse');
const { version } = require('../constants/version');

exports.errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(version.v1, message, 400);
  }

  res.status(error.statusCode || 500).json({
    version: error.version,
    success: false,
    statusCode: error.statusCode,
    error: error.message || 'Server Error',
  });
};
