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
  httpMethod: 'post',
  httpPath: '/orgs/{org_id}/products/{product_id}/variants',
  operationId: 'create_product_variant_orgs__org_id__products__product_id__variants_post',
};

export const tool: Tool = {
  name: 'create_products_variants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Product Variant\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_variant',\n  $defs: {\n    product_variant: {\n      type: 'object',\n      title: 'ProductVariant',\n      description: 'Represents a ProductVariant record',\n      properties: {\n        image_url: {\n          type: 'string',\n          title: 'Image Url'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        price: {\n          type: 'integer',\n          title: 'Price'\n        },\n        product_id: {\n          type: 'string',\n          title: 'Product Id'\n        },\n        variant_id: {\n          type: 'string',\n          title: 'Variant Id'\n        }\n      },\n      required: [        'image_url',\n        'name',\n        'price',\n        'product_id',\n        'variant_id'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(args, await client.products.variants.create(product_id, body)),
  );
};

export default { metadata, tool, handler };
