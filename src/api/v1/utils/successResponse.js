/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 * @param   {number} statusCode
 */
exports.successResponse = (version, statusCode, message, results) => {
  return {
    version,
    success: true,
    statusCode,
    message,
    results,
  };
};
