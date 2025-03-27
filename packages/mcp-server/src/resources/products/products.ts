// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import StainlessStore from '@dackerman-stainless/demostore';

registerApiMethod({
  name: 'create_products',
  description: 'Create Product',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        title: 'Description',
      },
      image_url: {
        type: 'string',
        title: 'Image Url',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      price: {
        type: 'integer',
        title: 'Price',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { ...body } = args;
    return client.products.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_products',
  description: 'Read Product',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { product_id } = args;
    return client.products.retrieve(product_id);
  },
});

registerApiMethod({
  name: 'update_products',
  description: 'Update Product',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
      image_url: {
        type: 'string',
        title: 'Image Url',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      price: {
        type: 'integer',
        title: 'Price',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { product_id, ...body } = args;
    return client.products.update(product_id, body);
  },
});

registerApiMethod({
  name: 'list_products',
  description: 'Read Products',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      skip: {
        type: 'integer',
        title: 'Skip',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { ...body } = args;
    return client.products.list(body);
  },
});

registerApiMethod({
  name: 'delete_products',
  description: 'Delete Product',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { product_id } = args;
    return client.products.delete(product_id);
  },
});
