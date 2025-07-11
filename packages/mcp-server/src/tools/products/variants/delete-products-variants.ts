// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@dackerman-stainless/demostore-mcp/filtering';
import { asTextContentResult } from '@dackerman-stainless/demostore-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import StainlessStore from '@dackerman-stainless/demostore';

export const metadata: Metadata = {
  resource: 'products.variants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/orgs/{org_id}/products/{product_id}/variants/{variant_id}',
  operationId: 'delete_product_variant_orgs__org_id__products__product_id__variants__variant_id__delete',
};

export const tool: Tool = {
  name: 'delete_products_variants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete Product Variant\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Success',\n  properties: {\n    success: {\n      type: 'boolean',\n      title: 'Success'\n    }\n  },\n  required: [    'success'\n  ]\n}\n```",
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
  const { product_id, variant_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.products.variants.delete(product_id, variant_id, body)),
  );
};

export default { metadata, tool, handler };
