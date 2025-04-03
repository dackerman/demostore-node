// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products.variants',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: StainlessStore, args: any) => {
  const { product_id } = args;
  return client.products.variants.list(product_id);
};

export default { metadata, tool, handler };
