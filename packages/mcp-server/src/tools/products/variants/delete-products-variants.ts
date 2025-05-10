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
      org_id: {
        type: 'string',
        title: 'Org Id',
      },
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

export const handler = (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const { product_id, variant_id, ...body } = args as any;
  return client.products.variants.delete(product_id, variant_id, body);
};

export default { metadata, tool, handler };
