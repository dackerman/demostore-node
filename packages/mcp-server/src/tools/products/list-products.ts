// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_products',
  description: 'Read Products',
  inputSchema: {
    type: 'object',
    properties: {
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

export const handler = (client: StainlessStore, args: any) => {
  const { ...body } = args;
  return client.products.list(body);
};

export default { metadata, tool, handler };
