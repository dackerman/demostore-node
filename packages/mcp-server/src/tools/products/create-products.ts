// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@dackerman-stainless/demostore-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/orgs/{org_id}/products',
  operationId: 'create_product_orgs__org_id__products_post',
};

export const tool: Tool = {
  name: 'create_products',
  description: 'Create Product',
  inputSchema: {
    type: 'object',
    properties: {
      org_id: {
        type: 'string',
        title: 'The Org Id',
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
};

export const handler = async (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.products.create(body));
};

export default { metadata, tool, handler };
