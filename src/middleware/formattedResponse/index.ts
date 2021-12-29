import { Request, Response } from 'express';
import { standardResponse } from '../../../src/utilities/standardResponse';

const formattedResponse = (_req: Request, res: Response) => {
  if (res.responseData && res.responseData.operationStatus) {
    res.send(res.responseData);
  } else {
    res.send(standardResponse(null, res.responseData));
  }
};

export { formattedResponse };
