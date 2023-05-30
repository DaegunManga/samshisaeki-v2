export class CustomError extends Error {
  statusCode: number;
  name: string;

  constructor({ type, details }: CustomErrorParams) {
    super(details.toString());
    this.statusCode = type;
    this.name = ErrorType[type];
  }
}

export enum ErrorType {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

interface CustomErrorParams {
  type: ErrorType;
  details: {
    message: string;
    code: number;
  };
}
