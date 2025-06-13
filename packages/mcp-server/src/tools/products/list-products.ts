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
  httpPath: '/orgs/{org_id}/products',
  operationId: 'read_products_orgs__org_id__products_get',
};

export const tool: Tool = {
  name: 'list_products',
  description: 'Read Products',
  inputSchema: {
    type: 'object',
    properties: {
      org_id: {
        type: 'string',
        title: 'Org Id',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      skip: {
        type: 'integer',
        title: 'Skip',
      },
    },
  },
};

export const handler = async (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.products.list(body));
};

export default { metadata, tool, handler };
