import { helpers } from '../utilities/helpers';

const validateApiRequest = (apiReqPayload, schema) => {
  const { error } = schema.validate(apiReqPayload);
  const isValid = error == null;
  let formattedErrors = null;

  if (!isValid) {
    formattedErrors = helpers.formatErrors(error.details);
  }

  return { isValidSchema: isValid, invalidParams: formattedErrors };
};

export { validateApiRequest };
