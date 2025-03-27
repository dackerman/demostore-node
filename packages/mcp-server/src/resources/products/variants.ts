// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import StainlessStore from '@dackerman-stainless/demostore';

registerApiMethod({
  name: 'create_products_variants',
  description: 'Create Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
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
        title: 'The Price!',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { product_id, ...body } = args;
    return client.products.variants.create(product_id, body);
  },
});

registerApiMethod({
  name: 'retrieve_products_variants',
  description: 'Read Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
      variant_id: {
        type: 'string',
        title: 'Variant Id',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { product_id, variant_id } = args;
    return client.products.variants.retrieve(product_id, variant_id);
  },
});

registerApiMethod({
  name: 'update_products_variants',
  description: 'Update Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
      variant_id: {
        type: 'string',
        title: 'Variant ID.',
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
        title: 'The Price!',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { product_id, variant_id, ...body } = args;
    return client.products.variants.update(product_id, variant_id, body);
  },
});

registerApiMethod({
  name: 'list_products_variants',
  description: 'Read Product Variants',
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
    return client.products.variants.list(product_id);
  },
});

registerApiMethod({
  name: 'delete_products_variants',
  description: 'Delete Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
      variant_id: {
        type: 'string',
        title: 'Variant Id',
      },
    },
  },
  handler: (client: StainlessStore, args: any) => {
    const { product_id, variant_id } = args;
    return client.products.variants.delete(product_id, variant_id);
  },
});
