const ResponseMessage = {
  INVALID_REQUEST: { message: 'INVALID REQUEST', code: 1 }, // 400
  CORS_NOT_ALLOWED: { message: 'CORS NOT ALLOWED', code: 2 }, // 403
  NOT_FOUND: { message: 'NOT FOUND', code: 3 }, // 404
  INTERNAL_SERVER_ERROR: { message: 'INTERNAL SERVER ERROR', code: 4 },
};

export default ResponseMessage as typeof ResponseMessage;
