// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import StainlessStore from '@dackerman-stainless/demostore';

// Instantiate client
const client = new StainlessStore();

// Create server instance
const server = new Server(
  {
    name: 'stainless_store_api',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

const tools: Tool[] = [];
const handlers: Record<string, Function> = {};

registerApiMethod({
  name: 'create_products',
  description: 'Create Product',
  inputSchema: {
    type: 'object',
    properties: {
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
  handler: (args: any) => {
    const { ...body } = args;
    return client.products.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_products',
  description: 'Read Product',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
    },
  },
  handler: (args: any) => {
    const { product_id } = args;
    return client.products.retrieve(product_id);
  },
});

registerApiMethod({
  name: 'update_products',
  description: 'Update Product',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
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
  handler: (args: any) => {
    const { product_id, ...body } = args;
    return client.products.update(product_id, body);
  },
});

registerApiMethod({
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
  handler: (args: any) => {
    const { ...body } = args;
    return client.products.list(body);
  },
});

registerApiMethod({
  name: 'delete_products',
  description: 'Delete Product',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
    },
  },
  handler: (args: any) => {
    const { product_id } = args;
    return client.products.delete(product_id);
  },
});

registerApiMethod({
  name: 'create_products_variants',
  description: 'Create Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
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
        title: 'The Price',
      },
    },
  },
  handler: (args: any) => {
    const { product_id, ...body } = args;
    return client.products.variants.create(product_id, body);
  },
});

registerApiMethod({
  name: 'retrieve_products_variants',
  description: 'Read Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
      variant_id: {
        type: 'string',
        title: 'Variant Id',
      },
    },
  },
  handler: (args: any) => {
    const { product_id, variant_id } = args;
    return client.products.variants.retrieve(product_id, variant_id);
  },
});

registerApiMethod({
  name: 'update_products_variants',
  description: 'Update Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
      variant_id: {
        type: 'string',
        title: 'Variant ID.',
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
        title: 'The Price',
      },
    },
  },
  handler: (args: any) => {
    const { product_id, variant_id, ...body } = args;
    return client.products.variants.update(product_id, variant_id, body);
  },
});

registerApiMethod({
  name: 'list_products_variants',
  description: 'Read Product Variants',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
    },
  },
  handler: (args: any) => {
    const { product_id } = args;
    return client.products.variants.list(product_id);
  },
});

registerApiMethod({
  name: 'delete_products_variants',
  description: 'Delete Product Variant',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
        title: 'Product Id',
      },
      variant_id: {
        type: 'string',
        title: 'Variant Id',
      },
    },
  },
  handler: (args: any) => {
    const { product_id, variant_id } = args;
    return client.products.variants.delete(product_id, variant_id);
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools,
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  const handler = handlers[name];
  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  const result = await handler(args);
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

function registerApiMethod({
  name,
  description,
  inputSchema,
  handler,
}: {
  name: string;
  description: string;
  inputSchema: Tool['inputSchema'];
  handler: Function;
}) {
  tools.push({ name, description, inputSchema });
  handlers[name] = handler;
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

console.error('running main');
main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
