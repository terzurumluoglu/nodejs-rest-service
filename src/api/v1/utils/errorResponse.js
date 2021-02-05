const { versions } = require('../constants/version');

class ErrorResponse extends Error {
  constructor(version, message, statusCode) {
    super(message);
    this.name = 'ErrorResponse';
    this.statusCode = statusCode;
    this.version = version;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;
