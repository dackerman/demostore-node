// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@dackerman-stainless/demostore-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products.variants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/orgs/{org_id}/products/{product_id}/variants/{variant_id}',
  operationId: 'delete_product_variant_orgs__org_id__products__product_id__variants__variant_id__delete',
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

export const handler = async (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const { product_id, variant_id, ...body } = args as any;
  return asTextContentResult(await client.products.variants.delete(product_id, variant_id, body));
};

export default { metadata, tool, handler };
