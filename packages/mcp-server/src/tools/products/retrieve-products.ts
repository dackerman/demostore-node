// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@dackerman-stainless/demostore-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/orgs/{org_id}/products/{product_id}',
  operationId: 'read_product_orgs__org_id__products__product_id__get',
};

export const tool: Tool = {
  name: 'retrieve_products',
  description: 'Read Product',
  inputSchema: {
    type: 'object',
    properties: {
      org_id: {
        type: 'string',
        title: 'Org Id',
        description: 'The ID of the organization',
      },
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
    },
  },
};

export const handler = async (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const { product_id, ...body } = args as any;
  return asTextContentResult(await client.products.retrieve(product_id, body));
};

export default { metadata, tool, handler };
