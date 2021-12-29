import superagent from 'supertest';
import app from '../../../src';
const request = (): any => superagent(app());
import {
  setUpApiTest,
  getValidToken,
  authHeader,
  getTokenWithoutUserAccess
} from '../../test-helper';
setUpApiTest();
const path = '/api/';
const method = 'GET';
describe(`${method} ${path}`, () => {
  test('returns a 404 when route has no handler', done => {
    request()
      .get(path)
      .set(authHeader, getValidToken())
      .expect(404, done);
  });
});
