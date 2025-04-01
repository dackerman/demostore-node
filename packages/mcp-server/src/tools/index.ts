// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StainlessStore from '@dackerman-stainless/demostore';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_products from './products/create-products';
import retrieve_products from './products/retrieve-products';
import update_products from './products/update-products';
import list_products from './products/list-products';
import delete_products from './products/delete-products';
import create_products_variants from './products/variants/create-products-variants';
import retrieve_products_variants from './products/variants/retrieve-products-variants';
import update_products_variants from './products/variants/update-products-variants';
import list_products_variants from './products/variants/list-products-variants';
import delete_products_variants from './products/variants/delete-products-variants';

export const tools: Tool[] = [];

export type HandlerFunction = (client: StainlessStore, args: any) => Promise<any>;
export const handlers: Record<string, HandlerFunction> = {};

function addEndpoint(endpoint: { tool: Tool; handler: HandlerFunction }) {
  tools.push(endpoint.tool);
  handlers[endpoint.tool.name] = endpoint.handler;
}

addEndpoint(create_products);
addEndpoint(retrieve_products);
addEndpoint(update_products);
addEndpoint(list_products);
addEndpoint(delete_products);
addEndpoint(create_products_variants);
addEndpoint(retrieve_products_variants);
addEndpoint(update_products_variants);
addEndpoint(list_products_variants);
addEndpoint(delete_products_variants);
