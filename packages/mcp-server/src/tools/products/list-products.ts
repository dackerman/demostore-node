// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@dackerman-stainless/demostore-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead Products\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Page',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        $ref: '#/$defs/product'\n      }\n    },\n    next: {\n      type: 'integer',\n      title: 'Next'\n    }\n  },\n  required: [    'data',\n    'next'\n  ],\n  $defs: {\n    product: {\n      type: 'object',\n      title: 'Product',\n      description: 'Represents a Product record',\n      properties: {\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        image_url: {\n          type: 'string',\n          title: 'Image Url'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        price: {\n          type: 'integer',\n          title: 'Price'\n        },\n        product_id: {\n          type: 'string',\n          title: 'Product Id'\n        }\n      },\n      required: [        'description',\n        'image_url',\n        'name',\n        'price',\n        'product_id'\n      ]\n    }\n  }\n}\n```",
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
  const response = await client.products.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
