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
};

export const handler = (client: StainlessStore, args: any) => {
  const { product_id, variant_id } = args;
  return client.products.variants.delete(product_id, variant_id);
};

export default { metadata, tool, handler };
