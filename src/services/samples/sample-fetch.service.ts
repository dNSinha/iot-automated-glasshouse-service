import axios from 'axios';

export default class SampleFetchService {
  /**
   * Demonstration of using Axios to call a GET route of another application.
   */
  async pingOtherApplication(): Promise<any> {
    try {
      return await axios.get('http://interaction-history-listener-uat.cfn.travp.net/ping');
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  }
}
