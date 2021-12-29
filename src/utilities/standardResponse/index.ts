const standardResponse = (err: any, data: any) => {
  const response: any = {
    operationStatus: {
      statusCode: err ? err.statusCode || '700' : '0',
      statusMessage: err ? err.name : 'Success'
    }
  };

  if (data) {
    response.data = data;
  }

  if (err) {
    if (err.code) {
      response.errors = [];
      response.errors.push({
        code: err.code,
        value: err.message
      });
    }
  }

  return response;
};

export { standardResponse };
