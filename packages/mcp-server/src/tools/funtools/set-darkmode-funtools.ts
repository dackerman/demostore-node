// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@dackerman-stainless/demostore-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet Darkmode Value\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Success',\n  properties: {\n    success: {\n      type: 'boolean',\n      title: 'Success'\n    }\n  },\n  required: [    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      darkmode: {
        type: 'boolean',
        title: 'Darkmode',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: StainlessStore, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.funtools.setDarkmode(body)));
};

export default { metadata, tool, handler };
