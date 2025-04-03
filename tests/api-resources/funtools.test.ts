// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StainlessStore from '@dackerman-stainless/demostore';
import { Response } from 'node-fetch';

const client = new StainlessStore({
  authToken: '123e4567-e89b-12d3-a456-426614174000',
  orgId: 'my_org',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource funtools', () => {
  test('setDarkmode: only required params', async () => {
    const responsePromise = client.funtools.setDarkmode({ darkmode: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setDarkmode: required and optional params', async () => {
    const response = await client.funtools.setDarkmode({ darkmode: true });
  });
});
