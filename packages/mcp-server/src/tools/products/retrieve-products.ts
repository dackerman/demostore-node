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
  httpPath: '/orgs/{org_id}/products/{product_id}',
  operationId: 'read_product_orgs__org_id__products__product_id__get',
};

export const tool: Tool = {
  name: 'retrieve_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead Product\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product',\n  $defs: {\n    product: {\n      type: 'object',\n      title: 'Product',\n      description: 'Represents a Product record',\n      properties: {\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        image_url: {\n          type: 'string',\n          title: 'Image Url'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        price: {\n          type: 'integer',\n          title: 'Price'\n        },\n        product_id: {\n          type: 'string',\n          title: 'Product Id'\n        }\n      },\n      required: [        'description',\n        'image_url',\n        'name',\n        'price',\n        'product_id'\n      ]\n    }\n  }\n}\n```",
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
  const { product_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.products.retrieve(product_id, body)));
};

export default { metadata, tool, handler };
