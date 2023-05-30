const ResponseMessage = {
  INVALID_REQUEST: { message: 'INVALID REQUEST', code: 1 }, // 400
  UNAUTHORIZED: { message: 'UNATHORIZED', code: 2 }, // 401
  FORBIDDEN: { message: 'FORBIDDEN', code: 3 }, // 403
  NOT_FOUND: { message: 'NOT FOUND', code: 4 }, // 404
  INTERNAL_SERVER_ERROR: { message: 'INTERNAL SERVER ERROR', code: 5 },

  CORS_NOT_ALLOWED: { message: 'CORS NOT ALLOWED', code: 10 },
};

export default ResponseMessage as typeof ResponseMessage;
