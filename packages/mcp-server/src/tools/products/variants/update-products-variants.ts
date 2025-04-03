// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products.variants',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: StainlessStore, args: any) => {
  const { product_id, variant_id, ...body } = args;
  return client.products.variants.update(product_id, variant_id, body);
};

export default { metadata, tool, handler };
