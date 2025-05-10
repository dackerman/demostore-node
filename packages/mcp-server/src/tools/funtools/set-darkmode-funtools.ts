// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'funtools',
  operation: 'write',
  tags: [],
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

export const handler = (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.funtools.setDarkmode(body);
};

export default { metadata, tool, handler };
