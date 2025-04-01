// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import StainlessStore from '@dackerman-stainless/demostore';

export const tool: Tool = {
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
};

export const handler = (client: StainlessStore, args: any) => {
  const { product_id, ...body } = args;
  return client.products.variants.create(product_id, body);
};

export default { tool, handler };
