class HttpError {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

const errorHandler = {
  notFoundError: (message = 'Not Found') => {
    return new HttpError(404, message);
  },
  badRequestError: (message = 'Bad Request') => {
    return new HttpError(400, message);
  },
  unAuthorizedError: (message = 'Unauthroized') => {
    return new HttpError(401, message);
  },
  forbiddenError: (message = 'Forbidden Error') => {
    return new HttpError(403, message);
  },
  serviceError: (message = 'Underlying system not responding') => {
    return new HttpError(503, message);
  }
};

export { errorHandler };
