// eslint-disable-next-line @typescript-eslint/no-var-requires
const { tokenProvider, certificates } = require('@trv/auth-local-proxy');
const localIssuer = 'LOCAL_ISS';
const localAudience = 'LOCAL_AUD';
const authHeader = 'x-trv-accessgw';
const testUserId = 'TEST_USER_ID';

const getTestDate = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
};

const setUpApiTest = (): void => {
  process.env.NODE_ENV = 'test';
  process.env.TRAVAUTH_ISSUER = localIssuer;
  process.env.TRAVAUTH_AUDIENCE = localAudience;
  process.env.TRAVAUTH_SECRETORKEY = certificates.publicKey;
  process.env.TRAVAUTH_ROLESJSON = JSON.stringify({
    roles: { user: { groups: ['seed_app_user'] } }
  });
};

const getValidToken = (): any => {
  return tokenProvider.createToken(localIssuer, localAudience, testUserId, ['SEED_APP_USER']);
};

const getTokenWithoutUserAccess = (): any => {
  return tokenProvider.createToken(localIssuer, localAudience, testUserId, []);
};

export {
  getTestDate,
  setUpApiTest,
  authHeader,
  getValidToken,
  testUserId,
  getTokenWithoutUserAccess
};
