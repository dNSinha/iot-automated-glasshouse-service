import superagent from 'supertest';
import app from '../../../../src';
const request = () => superagent(app());
import { setUpApiTest, getValidToken, authHeader } from '../../../test-helper';
setUpApiTest();
const token = getValidToken();

const path = '/api/ping';
const method = 'GET';
describe(`${method} ${path}`, () => {
  test('returns a 200', done => {
    request()
      .get(path)
      .set(authHeader, token)
      .expect(200, done);
  });
  test('returns a pong message', done => {
    request()
      .get('/api/ping')
      .set(authHeader, token)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual({ message: 'pong' });
        done();
      });
  });
});
