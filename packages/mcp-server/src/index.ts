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
      description: { type: 'string' },
      image_url: { type: 'string' },
      name: { type: 'string' },
      price: { type: 'integer' },
    },
  },
  handler: (args: any) => {
    console.error('Calling tool: create_products with args:', args);
    const { ...body } = args;
    return client.products.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_products',
  description: 'Read Product',
  inputSchema: { type: 'object', properties: { product_id: { type: 'string' } } },
  handler: (args: any) => {
    console.error('Calling tool: retrieve_products with args:', args);
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
      product_id: { type: 'string' },
      description: { type: 'string' },
      image_url: { type: 'string' },
      name: { type: 'string' },
      price: { type: 'integer' },
    },
  },
  handler: (args: any) => {
    console.error('Calling tool: update_products with args:', args);
    const { product_id, ...body } = args;
    return client.products.update(product_id, body);
  },
});

registerApiMethod({
  name: 'list_products',
  description: 'Read Products',
  inputSchema: { type: 'object', properties: { limit: { type: 'integer' }, skip: { type: 'integer' } } },
  handler: (args: any) => {
    console.error('Calling tool: list_products with args:', args);
    const { ...body } = args;
    return client.products.list(body);
  },
});

registerApiMethod({
  name: 'delete_products',
  description: 'Delete Product',
  inputSchema: { type: 'object', properties: { product_id: { type: 'string' } } },
  handler: (args: any) => {
    console.error('Calling tool: delete_products with args:', args);
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
      product_id: { type: 'string' },
      image_url: { type: 'string' },
      name: { type: 'string' },
      price: { type: 'integer' },
    },
  },
  handler: (args: any) => {
    console.error('Calling tool: create_products_variants with args:', args);
    const { product_id, ...body } = args;
    return client.products.variants.create(product_id, body);
  },
});

registerApiMethod({
  name: 'retrieve_products_variants',
  description: 'Read Product Variant',
  inputSchema: {
    type: 'object',
    properties: { product_id: { type: 'string' }, variant_id: { type: 'string' } },
  },
  handler: (args: any) => {
    console.error('Calling tool: retrieve_products_variants with args:', args);
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
      product_id: { type: 'string' },
      variant_id: { type: 'string' },
      image_url: { type: 'string' },
      name: { type: 'string' },
      price: { type: 'integer' },
    },
  },
  handler: (args: any) => {
    console.error('Calling tool: update_products_variants with args:', args);
    const { product_id, variant_id, ...body } = args;
    return client.products.variants.update(product_id, variant_id, body);
  },
});

registerApiMethod({
  name: 'list_products_variants',
  description: 'Read Product Variants',
  inputSchema: { type: 'object', properties: { product_id: { type: 'string' } } },
  handler: (args: any) => {
    console.error('Calling tool: list_products_variants with args:', args);
    const { product_id } = args;
    return client.products.variants.list(product_id);
  },
});

registerApiMethod({
  name: 'delete_products_variants',
  description: 'Delete Product Variant',
  inputSchema: {
    type: 'object',
    properties: { product_id: { type: 'string' }, variant_id: { type: 'string' } },
  },
  handler: (args: any) => {
    console.error('Calling tool: delete_products_variants with args:', args);
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

  return apiResponseToMcp(handler(args));
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

function apiResponseToMcp(response: Promise<object>) {
  return response.then(
    (value) => {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(value),
          },
        ],
      };
    },
    (error) => {
      console.error('API ERROR:', error);
      return {
        content: [
          {
            type: 'text',
            text: 'API ERROR: ' + JSON.stringify(error),
          },
        ],
      };
    },
  );
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
