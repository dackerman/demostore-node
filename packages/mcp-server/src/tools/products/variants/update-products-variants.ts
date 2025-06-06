// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@dackerman-stainless/demostore-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products.variants',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/orgs/{org_id}/products/{product_id}/variants/{variant_id}',
  operationId: 'update_product_variant_orgs__org_id__products__product_id__variants__variant_id__put',
};

export const tool: Tool = {
  name: 'update_products_variants',
  description: 'Update Product Variant',
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
};

export const handler = async (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const { product_id, variant_id, ...body } = args as any;
  return asTextContentResult(await client.products.variants.update(product_id, variant_id, body));
};

export default { metadata, tool, handler };
