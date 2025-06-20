// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@dackerman-stainless/demostore-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'funtools',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/funtools/set_darkmode_value',
  operationId: 'set_darkmode_value_funtools_set_darkmode_value_put',
};

export const tool: Tool = {
  name: 'set_darkmode_funtools',
  description: 'Set Darkmode Value',
  inputSchema: {
    type: 'object',
    properties: {
      darkmode: {
        type: 'boolean',
        title: 'Darkmode',
      },
    },
  },
};

export const handler = async (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.funtools.setDarkmode(body));
};

export default { metadata, tool, handler };
