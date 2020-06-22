import { enableFetchMocks } from 'jest-fetch-mock';
import sendHttpRequest from './helpers/api';
import endpoints from './helpers/endpoints';
import rivraddon from './app.js';

enableFetchMocks();

beforeEach(() => fetch.resetMocks());

describe('trackPbjsEvent', () => {
  const validRequest = { eventType: 'test' };

  it('should return response object', async () => {
    fetch.mockResponseOnce(JSON.stringify({ status: 200 }));

    const response = await sendHttpRequest('POST', endpoints.EVENT_POST, validRequest);

    expect(fetch).toHaveBeenCalledWith(endpoints.EVENT_POST, {
      method: 'POST',
      body: validRequest
    });
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should throw an error', async () => {
    fetch.mockReject(() => Promise.reject('API is down!'));

    try {
      await sendHttpRequest();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('enableAnalytics', () => {
  it('should output a message in console', () => {
    const message = 'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics';
    console.log = jest.fn();

    rivraddon.analytics.enableAnalytics();
    expect(console.log).toHaveBeenCalledWith(message);
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
