// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StainlessStore from '@dackerman-stainless/demostore';
import { Response } from 'node-fetch';

const client = new StainlessStore({
  authToken: '123e4567-e89b-12d3-a456-426614174000',
  orgId: 'my_org',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource variants', () => {
  test('create: only required params', async () => {
    const responsePromise = client.products.variants.create('product_id', {
      image_url: 'image_url',
      name: 'name',
      price: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.products.variants.create('product_id', {
      org_id: 'org_id',
      image_url: 'image_url',
      name: 'name',
      price: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.products.variants.retrieve('product_id', 'variant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.products.variants.retrieve('product_id', 'variant_id', {
      org_id: 'org_id',
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variants.retrieve('product_id', 'variant_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StainlessStore.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variants.retrieve(
        'product_id',
        'variant_id',
        { org_id: 'org_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(StainlessStore.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.products.variants.update('product_id', 'variant_id', {
      image_url: 'image_url',
      name: 'name',
      price: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.products.variants.update('product_id', 'variant_id', {
      org_id: 'org_id',
      image_url: 'image_url',
      name: 'name',
      price: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.products.variants.list('product_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.products.variants.list('product_id', { org_id: 'org_id' });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variants.list('product_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StainlessStore.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variants.list('product_id', { org_id: 'org_id' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StainlessStore.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.products.variants.delete('product_id', 'variant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.products.variants.delete('product_id', 'variant_id', { org_id: 'org_id' });
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variants.delete('product_id', 'variant_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StainlessStore.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variants.delete(
        'product_id',
        'variant_id',
        { org_id: 'org_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(StainlessStore.NotFoundError);
  });
});
