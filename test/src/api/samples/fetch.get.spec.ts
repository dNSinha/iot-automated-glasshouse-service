import superagent from 'supertest';
import app from '../../../../src';
const request = () => superagent(app());
import { setUpApiTest, getValidToken, authHeader } from '../../../test-helper';
setUpApiTest();
const token = getValidToken();
import SampleFetchService from '../../../../src/services/samples/sample-fetch.service';

const path = '/api/samples';
const method = 'GET';
describe(`${method} ${path}/fetch`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('returns a 200', done => {
    request()
      .get('/api/samples/fetch?test=true')
      .set(authHeader, token)
      .expect(200, done);
    done();
  });
  /**
   * Demonstrates using a jest mock
   */
  test('calls a service function to fetch the ping status of another application', done => {
    SampleFetchService.prototype.pingOtherApplication = jest
      .fn()
      .mockResolvedValue({ data: 'App is up and running' });
    request()
      .get('/api/samples/fetch?test=true')
      .set(authHeader, token)
      .expect(200)
      .then(response => {
        expect(response.text).toEqual('App is up and running');
        done();
      });
  });
});
