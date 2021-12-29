import SampleFetchService from '../../../../src/services/samples/sample-fetch.service';
const sampleFetchService = new SampleFetchService();
import axios from 'axios';

describe('Sample Fetch Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should be able to ping another application and get a response', async () => {
    expect(sampleFetchService.pingOtherApplication).toBeDefined();
    jest.spyOn(axios, 'get').mockResolvedValue({ message: 'pong' });
    const pingResponse = await sampleFetchService.pingOtherApplication();
    expect(pingResponse).toEqual({ message: 'pong' });
  });
});
